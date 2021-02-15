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
  private filtersSelected$: Subscription;

  balloonFilters: Array<FilterElement> = new Array<FilterElement>();

  constructor( private filterService: FilterService ) { }

  ngOnInit(): void {
    console.log('Componente globitos');
    this.filtersSelected$ = this.filterService.filtersSelected$.subscribe(
      (filtersSelected: Array<FilterElement>) => this.balloonFilters = this.filterService.changeStatefiltersSelected(filtersSelected)
    );
  }

  ngOnDestroy(): void {
    console.log('Destroy component ballons');
    this.filtersSelected$.unsubscribe();
  }

  public deleteBalloonFilter(ballon: FilterElement): void {
    this.filterService.findFilterActive(ballon.nombre, ballon.clave);
  }

}
