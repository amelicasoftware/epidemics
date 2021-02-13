import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterElement } from '../../models/FilterElement.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.css']
})
export class BalloonsComponent implements OnInit, OnDestroy {
  filtersSelected: Subscription;

  balloonFilters: Array<FilterElement> = new Array<FilterElement>();

  constructor( private filterService: FilterService ) { }

  ngOnDestroy(): void {
    this.filtersSelected.unsubscribe();
  }

  ngOnInit(): void {
    console.log('Componente globitos');
    this.filtersSelected = this.filterService.filtersSelected$.subscribe(
      (filtersSelected: Array<FilterElement>) => this.balloonFilters = this.filterService.changeStatefiltersSelected(filtersSelected)
    );
  }

  public deleteBalloonFilter(ballon: FilterElement){
    this.filterService.findFilterActive(ballon.nombre, ballon.clave);
  }

}
