import { Component, OnInit } from '@angular/core';
import { Numeraries } from '../../constants/numerary';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  numeraries = Numeraries;

  constructor() { }

  ngOnInit(): void {
  }

}
