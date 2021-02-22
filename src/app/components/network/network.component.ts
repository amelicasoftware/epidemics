import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
import * as $ from 'jquery';
import cargarRed from '../../../assets/js/red.js';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    get(`http://localhost:4200/assets/js/red.js`, () => {
    });

    // cargarRed($);
  }

}
