import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  private urlProject: string = environment.urlProject;

  constructor() { }

  ngOnInit(): void {
    get(`${this.urlProject}assets/js/red.js`, () => {
    });

    // cargarRed($);
  }

}
