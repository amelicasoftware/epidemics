import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Librerias
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { NgxSpinnerModule } from 'ngx-spinner';

// PIPES
import { AuthorsPipe } from './pipes/authors.pipe';
import { TitleArticlePipe } from './pipes/title-article.pipe';

// Interceptors
import { HttpErrorInterceptor } from './interceptors/httpError.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

// Componentes
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AppComponent } from './app.component';
import { BalloonsComponent } from './components/balloons/balloons.component';
import { BannerSearchesComponent } from './components/banner-searches/banner-searches.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { BusquedaPaisComponent } from './pages/busqueda-pais/busqueda-pais.component';
import { BusquedaPalabrasClaveComponent } from './pages/busqueda-palabras-clave/busqueda-palabras-clave.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ROUTES } from './routes/app.routes';
import { TableComponent } from './components/table/table.component';
import { TargetComponent } from './components/target/target.component';
import { HomeComponent } from './pages/home/home.component';
import { LastArticlesComponent } from './components/last-articles/last-articles.component';
import { WordCloudComponent } from './components/word-cloud/word-cloud.component';
import { NetworkComponent } from './components/network/network.component';
import { MapComponent } from './components/map/map.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AcercaDeComponent,
    AppComponent,
    AuthorsPipe,
    BalloonsComponent,
    BannerSearchesComponent,
    BusquedaGeneralComponent,
    BusquedaPaisComponent,
    BusquedaPalabrasClaveComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    TableComponent,
    TargetComponent,
    TitleArticlePipe,
    PaginationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LastArticlesComponent,
    WordCloudComponent,
    NetworkComponent,
    MapComponent,
    MenuMobileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
