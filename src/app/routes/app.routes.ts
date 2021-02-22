import { Routes } from '@angular/router';
import { AcercaDeComponent } from '../pages/acerca-de/acerca-de.component';
import { BusquedaGeneralComponent } from '../pages/busqueda-general/busqueda-general.component';
import { BusquedaPalabrasClaveComponent } from '../pages/busqueda-palabras-clave/busqueda-palabras-clave.component';
import { BusquedaPaisComponent } from '../pages/busqueda-pais/busqueda-pais.component';
import { HomeComponent } from '../pages/home/home.component';

export const ROUTES: Routes = [
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'busqueda-general/:search', component: BusquedaGeneralComponent },
    { path: 'busqueda-palabra-clave/:key', component: BusquedaPalabrasClaveComponent },
    { path: 'busqueda-pais/:countryId', component: BusquedaPaisComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
