import { Component, OnDestroy, OnInit } from '@angular/core';
import { Filter } from '../../models/Filter.model';
import { FilterService } from '../../services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  filtersSubscription: Subscription;

  filters: Array<Filter> = new Array<Filter>();

  constructor( private filterService: FilterService ) { }

  ngOnDestroy(): void {
    this.filtersSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.filtersSubscription = this.filterService.filters$.subscribe(
      (filters: Array<Filter>) => this.filters = filters
    );
  }

  public applyFilters(){
    this.filterService.applyFilters();
  }

  public showElements(filter: any){
    this.filterService.showElements(filter);
  }

  public activateFilters(element: any): boolean{
    const activate: boolean = this.filterService.activateFilters(element);
    return activate;
  }

  public addFilter(filterElement: any, filterName: string){
    this.filterService.addFilter(filterElement, filterName);
  }

  public showButton(filter: Filter): boolean{
    const show: boolean = this.filterService.showButton(filter);
    return show;
  }
}
