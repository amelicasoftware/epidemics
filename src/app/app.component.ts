import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private translateService: TranslateService
  ){
    this.setAppLanguage();
  }

  setAppLanguage(): void {
    this.translateService.addLangs(['es', 'en']);

    if (localStorage.getItem('language')){
      this.translateService.setDefaultLang(localStorage.getItem('language'));
      this.translateService.use(localStorage.getItem('language'));
    } else {
      this.translateService.setDefaultLang('es');
      this.translateService.use('es');
      localStorage.setItem('language', 'es');
    }
  }
}
