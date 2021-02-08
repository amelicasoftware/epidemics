import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  position$: EventEmitter<number> = new EventEmitter<number>();
  initialPosition$: EventEmitter<number> = new EventEmitter<number>();
  finalPosition$: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  changePosition(page: number) {
    console.log('change position');
    this.position$.emit(page);
  }

  changeInitialPosition(){
    this.initialPosition$.emit(1);
  }

  changeFinalPosition(totalPages: number, typeSearch: string) {
    console.log('change final position');
    console.log(totalPages);
    let finalPage: number;

    typeSearch === 'articles'
      ? Number.isInteger(totalPages / 10)
        ? (finalPage = totalPages / 10)
        : (finalPage = Math.floor(totalPages / 10) + 1)
      : Number.isInteger(totalPages / 10)
        ? (finalPage = totalPages / 12)
        : (finalPage = Math.floor(totalPages / 12) + 1);

    this.finalPosition$.emit(finalPage);
  }
}
