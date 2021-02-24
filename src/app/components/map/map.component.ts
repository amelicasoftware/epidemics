import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geofata_wordLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ArticleService } from 'src/app/services/article.service';
import { Country } from 'src/app/models/Country.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private chart: am4maps.MapChart;
  private countrys: Country[];
  private urlProject: string = environment.urlProject;

  constructor(
    private articlesService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articlesService.getCountries().subscribe((countrys) => {
      this.countrys = countrys;
      console.log(countrys);
    });
  }

  ngAfterViewInit(): void {
    this.chart = am4core.create('chartdiv', am4maps.MapChart); // Create map instance
    this.chart.geodata = am4geofata_wordLow; // Set map definition
    this.chart.projection = new am4maps.projections.Miller(); // Set projection
    this.chart.maxZoomLevel = 1;
    this.chart.seriesContainer.draggable = false;
    this.chart.seriesContainer.resizable = false;

    // Creating polygon series and loadin data
    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ['AQ'];
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = '{name}';
    polygonTemplate.polygon.fillOpacity = 0.6;
    polygonTemplate.fill = am4core.color('#3376c7');
    // let hs = polygonTemplate.states.create('hover');
    // hs.properties.fill = am4core.color('#74X999');

    let imageSeries = this.chart.series.push(new am4maps.MapImageSeries());
    imageSeries.dataFields.value = 'value';
    imageSeries.fill = am4core.color('#74B266');

    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.propertyFields.latitude = 'latitude';
    imageTemplate.propertyFields.longitude = 'longitude';
    imageTemplate.nonScaling = true;
    imageTemplate.fill = am4core.color('white');

    imageSeries.tooltip.label.interactionsEnabled = true;
    imageSeries.tooltip.keepTargetHover = true;

    let circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = 'color';
    circle.tooltipText = '{name}';
    circle.urlTarget = '_blank';
    circle.url = this.urlProject + '#/busqueda-pais/{clave}';

    imageSeries.dataSource.url = this.urlProject + 'assets/json/paisesEpidemics.json';
    // imageSeries.dataSource.data = this.countrys;
    imageSeries.dataSource.parser = new am4core.JSONParser();
    console.log(imageSeries.dataSource.data);
    imageSeries.heatRules.push({
      "target": circle,
      'property': 'radius',
      'min': 5,
      'max': 15,
      'dataField': 'value'
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }

}
