import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // palabra: string;
  numArticulos: number;
  numRevistas: number;
  numPaises: number;
  selection: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // searchText(word: string) {
  //   this.router.navigate(['/busquedaGeneral', word]);
  // }

  searchText(word: string){
    console.log(word);
    this.router.navigate(['/busqueda-general', word]);
  }

  rightScroll() {
    // console.log('me muevo a la derecha');
    const posicion = $('#contenedor-fichas').scrollLeft();
    $('#contenedor-fichas').scrollLeft(posicion + 500);
  }

  leftScroll() {
    // console.log('me muevo a la izquierda');
    const posicion = $('#contenedor-fichas').scrollLeft();
    $('#contenedor-fichas').scrollLeft(posicion - 500);
  }

  toCould() {
    document.getElementById('could').scrollIntoView({ behavior: "smooth" });
    this.selection = 2;
  }
  toSearcher() {
    document.getElementById('searcher').scrollIntoView({ behavior: "smooth" });
    this.selection = 1;
  }
  toNetwork() {
    document.getElementById('network').scrollIntoView({ behavior: "smooth" });
    this.selection = 3;
  }
  toMap() {
    document.getElementById('map').scrollIntoView({ behavior: "smooth" });
    this.selection = 4;
  }
  toSparql() {
    document.getElementById('sparql').scrollIntoView({ behavior: "smooth" });
    this.selection = 5;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    // console.log('estoy scrolleando');
    if ($(window).scrollTop() + 80 >= $('#menu-section').offset().top) {
      if ($('#menu-section').offset().top < 400) {
        $('#menu-section').css('position', 'inherit');
        $('.navigation').css('position', 'inherit');
      } else {
        $('#menu-section').css('position', 'fixed');
        $('#menu-section').css('top', '80px');
        $('#menu-section').css('width', '100%');
        $('#menu-section').css('z-index', 2);
        $('.navigation').css('z-index', 2);
        $('.navigation').css('position', 'fixed');
        $('.navigation').css('width', '100%');
        $('.navigation').css('justify-content', 'center');
        $('.navigation').css('background-color', '#37464e');
      }
      // $("#menu2").css('display','block');
      // $("#header").css('opacity', 1);
      // console.log($(window).scrollTop());

    } else {
      // $("#menu2").css('display','none');
      // $("#header").css('opacity', 0.9);
      // console.log('voy a regresar');
      // $('#menu-section').css('position', 'inherit');
    }
  }

  
}
