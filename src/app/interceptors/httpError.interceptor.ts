
import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorService } from '../services/error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor( private errorService: ErrorService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError(error => {
            let errorMessage = '';

            (error instanceof ErrorEvent)
            ? // client-side error
                errorMessage = `Client-side error: ${error.error.message}`
            : // backend error
                errorMessage = `Server-side error: ${error.status} ${error.message}`;

            this.errorService.showError(errorMessage);
            return throwError(errorMessage);
        })
    );
  }
}
