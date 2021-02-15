import { Injectable } from '@angular/core';
import { Filter } from '../models/Filter.model';
import { FilterElement } from '../models/FilterElement.model';
import { FilterChain } from '../models/FilterChain.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _filters$: Subject<Array<Filter>> = new Subject<Array<Filter>>();
  private _filtersChain$: Subject<FilterChain> = new Subject<FilterChain>();
  private _filtersSelected$: Subject<Array<FilterElement>> = new Subject<Array<FilterElement>>();

  filtersSelected: Array<FilterElement> = [];
  filtersChain: FilterChain = new FilterChain();

  constructor() { }

  get filters$(): Observable<Array<Filter>>{
    return this._filters$;
  }

  get filtersChain$(): Observable<FilterChain>{
    return this._filtersChain$;
  }

  get filtersSelected$(): Observable<Array<FilterElement>>{
    return this._filtersSelected$;
  }

  public changeFilters(filters: Array<Filter>): void {
    console.log('change filters', filters);
    this._filters$.next(filters);
  }

  public applyFilters(): void {
    this.filtersChain.yearChain = this.buildChain('Año');
    this.filtersChain.disciplineChain = this.buildChain('Disciplina');
    this.filtersChain.countryChain = this.buildChain('País');
    this.filtersChain.languageChain = this.buildChain('Idioma');
    this.filtersChain.fontChain = this.buildChain('Fuente');
    console.log(this.filtersChain);
    /* if (this.filtersChain.countryChain
      || this.filtersChain.disciplineChain
      || this.filtersChain.fontChain
      || this.filtersChain.languageChain
      || this.filtersChain.yearChain
    ){
      this.filtersChain$.emit(this.filtersChain);
      this.filtersSelected$.emit(this.filtersSelected);
    }else{
      this.filtersChain$.emit(this.filtersChain);
      this.filtersSelected$.emit(this.filtersSelected);
    } */
    this._filtersChain$.next(this.filtersChain);
    this._filtersSelected$.next(this.filtersSelected);
  }

  public buildChain(filter: string): string {
    const filters: string[] = [];
    let filtersChain = '';

    this.filtersSelected.forEach((filterSelected: FilterElement) => {
      if (filterSelected.filtro === filter){
        filters.push(filterSelected.clave);
      }
    });

    filtersChain = filters.join('<<<');
    console.log(filtersChain);
    return filtersChain;
  }

  public showElements(filter: Filter): void {
    if (!filter.hasOwnProperty('state')) {
      Object.defineProperty(filter, 'state', {
        value: false,
        writable: true
      });
    }

    filter.state
    ? Object.defineProperty(filter, 'state', { value: false })
    : Object.defineProperty(filter, 'state', { value: true });
  }

  public activateFilters(element: FilterElement): boolean {
    if (this.filtersSelected.find((filterSelected: FilterElement) => filterSelected.nombre === element.nombre)) {
      return true;
    }else{
      return false;
    }
  }

  public addFilter(filterElement: FilterElement, filterName: string): void {
    const deleteFilterActive: boolean = this.findFilterActive(filterElement.nombre, filterElement.clave);
    console.log(deleteFilterActive);
    const element: FilterElement = {
      clave: filterElement.clave,
      nombre: filterElement.nombre,
      filtro: filterName,
      state: false
    };

    console.log(element);
    if (!deleteFilterActive){
      if (this.findFilterSelected(element.nombre, false)) {
        const index: number = this.getIndexFilterSelected(element.clave);
        this.filtersSelected.splice(index, 1);
      } else {
        this.filtersSelected.push(element);
      }
    }

    console.log(this.filtersSelected);
  }

  public showButton(filter: Filter): boolean {
    if (filter.elementos.length > 5){
      return false;
    }else{
      return true;
    }
  }

  public findFilterActive(filterName: string, key: string): boolean {
    if (this.findFilterSelected(filterName, true)){
      const index: number = this.getIndexFilterSelected(key);
      this.filtersSelected.splice(index, 1);
      this.applyFilters();
      return true;
    }else{
      return false;
    }
  }

  public findFilterSelected(filterName: string, state: boolean): boolean {
    return this.filtersSelected.find(
        (filterSelected: FilterElement) => filterSelected.nombre === filterName && filterSelected.state === state
      )
      ? true
      : false;
  }

  public getIndexFilterSelected(key: string): number {
    return this.filtersSelected.findIndex((filterIndexSelected: FilterElement) => filterIndexSelected.clave === key);
  }

  public changeStatefiltersSelected(filtersSelected: Array<FilterElement>): Array<FilterElement> {
    filtersSelected.forEach(
      (filterSelected: FilterElement) => {
        filterSelected.state = true;
      }
    );
    return filtersSelected;
  }

  public cleanFiltersSelected(): void {
    this.filtersSelected = [];
    this._filtersSelected$.next(this.filtersSelected);
  }
}
