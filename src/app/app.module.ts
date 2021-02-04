import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { ROUTES } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaGeneralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
