import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  showError(errorMessage: string): void {
    console.log(errorMessage);
    Swal.fire(
      'Ha ocurrido un error!',
      errorMessage,
      'warning'
    );
  }

  showErrorSearchs(errorMessage: string): void {
    console.log(errorMessage);
    Swal.fire(
      'Lo sentimos',
      errorMessage,
      'warning'
    );
  }

  async showErrorNullArticles(): Promise<string> {
    const result_1 = await Swal.fire({
      title: 'Ingresé palabra de búsqueda',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'enviar',
      showLoaderOnConfirm: true,
      preConfirm: (search_1: string) => {
        return search_1;
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
    if (result_1.isConfirmed) {
      return result_1.value;
    }
  }
}
