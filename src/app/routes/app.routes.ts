import { Routes } from '@angular/router';
import { BusquedaGeneralComponent } from '../pages/busqueda-general/busqueda-general.component';

export const ROUTES: Routes = [
    {path: 'busqueda-general/:search', component: BusquedaGeneralComponent },
];
