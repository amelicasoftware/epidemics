import { Component, NgZone, OnInit } from '@angular/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  private chart: am4charts.XYChart;
  private url2: string;
  private url: string;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart2 = am4core.create('wordCloud', am4plugins_wordCloud.WordCloud);
      chart2.fontFamily = 'Courier New';
      const series = chart2.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series.randomness = 0.1;
      series.rotationThreshold = 0.5;
      series.dataSource.url = 'assets/json/palabrasEpidemics.json';

      series.dataFields.word = 'word';
      series.dataFields.value = 'weight';

      series.heatRules.push({
        target: series.labels.template,
        property: 'fill',
        min: am4core.color('#4d4d4d'),
        max: am4core.color('#4d4d4d'),
        dataField: 'value'
      });

      series.labels.template.url = `http://semantic.redalyc.org/epidemics/#/busqueda-palabra-clave/{word}`;
      series.labels.template.urlTarget = '_self';
      console.log('############' + `http://semantic.redalyc.org/epidemics/#/busqueda-palabra-clave/{word}`);

      const subtitle2 = chart2.titles.create();
      subtitle2.text = '';

      const title2 = chart2.titles.create();
      title2.text = '';
      title2.fontSize = 20;
      title2.fontWeight = '800';

    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
