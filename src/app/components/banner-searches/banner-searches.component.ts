import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-searches',
  templateUrl: './banner-searches.component.html',
  styleUrls: ['./banner-searches.component.css']
})
export class BannerSearchesComponent implements OnInit {
  @Input() sectionGeneral: boolean;
  @Input() sectionKey: boolean;
  @Input() sectionCountry: boolean;
  @Input() sectionAbout: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
