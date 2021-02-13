import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Librerias
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { NgxSpinnerModule } from 'ngx-spinner';

// PIPES
import { AuthorsPipe } from './pipes/authors.pipe';

// Interceptors
import { HttpErrorInterceptor } from './interceptors/httpError.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

// Componentes
import { AppComponent } from './app.component';
import { BalloonsComponent } from './components/balloons/balloons.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { ROUTES } from './routes/app.routes';
import { FiltersComponent } from './components/filters/filters.component';
import { TableComponent } from './components/table/table.component';
import { TargetComponent } from './components/target/target.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsPipe,
    BalloonsComponent,
    BusquedaGeneralComponent,
    FiltersComponent,
    TableComponent,
    TargetComponent,
    PaginationComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
