import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor( private spinnerService: NgxSpinnerService ) { }

  showSpinner(){
    this.spinnerService.show();
  }

  hideSpinner(){
    this.spinnerService.hide();
  }
}
