import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Librerias
import { NgxSpinnerModule } from 'ngx-spinner';

// PIPES
import { AuthorsPipe } from './pipes/authors.pipe';

// Componentes
import { AppComponent } from './app.component';
import { BalloonsComponent } from './components/balloons/balloons.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { ROUTES } from './routes/app.routes';
import { FiltersComponent } from './components/filters/filters.component';
import { TableComponent } from './components/table/table.component';
import { TargetComponent } from './components/target/target.component';
import { PaginationComponent } from './components/pagination/pagination.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
