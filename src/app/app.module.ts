import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { ROUTES } from './routes/app.routes';
import { FiltersComponent } from './components/filters/filters.component';
import { TargetComponent } from './components/target/target.component';
import { AuthorsPipe } from './pipes/authors.pipe';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BalloonsComponent } from './components/balloons/balloons.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaGeneralComponent,
    FiltersComponent,
    TargetComponent,
    AuthorsPipe,
    TableComponent,
    PaginationComponent,
    BalloonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
