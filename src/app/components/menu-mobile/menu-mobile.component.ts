import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openNav(): void {
    document.getElementById('myNav').style.width = "100%";
  }

  closeNav(): void {
    document.getElementById('myNav').style.width = "0%";
  }

  toCould() {
    document.getElementById('could').scrollIntoView({ behavior: "smooth" });
    // this.selection = 2;
    setTimeout(() => {
      this.closeNav();
    }, 300);
  }
  toSearcher() {
    document.getElementById('searcher').scrollIntoView({ behavior: "smooth" });
    // this.selection = 1;
    setTimeout(() => {
      this.closeNav();
    }, 300);
  }
  toNetwork() {
    document.getElementById('network').scrollIntoView({ behavior: "smooth" });
    // this.selection = 3;
    setTimeout(() => {
      this.closeNav();
    }, 300);
  }
  toMap() {
    document.getElementById('map').scrollIntoView({ behavior: "smooth" });
    // this.selection = 4;
    setTimeout(() => {
      this.closeNav();
    }, 300);
  }
  toSparql() {
    document.getElementById('sparql').scrollIntoView({ behavior: "smooth" });
    // this.selection = 5;
    setTimeout(() => {
      this.closeNav();
    }, 300);
  }
  toAbout(){
    this.router.navigate(['/acerca-de']);
  }

}
