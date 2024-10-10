import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MenuMobileComponent) menu: MenuMobileComponent;
  @Input() currentSection: string;
  menuOpen: boolean = false;
  selection: number;
  isHidden: boolean = false;
  isShow: boolean = false;

  public menuItems: MenuItemModel[] = [
    {
      text:  'header.acerca.redalyc',
      items: [
          {
            text: 'header.mision',
            url: 'https://www.redalyc.org/redalyc/acerca-de/mision.html'
          },
          {
            text: 'header.consejo',
            url: 'https://www.redalyc.org/redalyc/acerca-de/comite.html'
          },
          {
            text: 'header.directorio',
            url: 'https://www.redalyc.org/redalyc/acerca-de/directorio.html'
          },
          {
            text: 'header.cronologia',
            url: 'https://www.redalyc.org/redalyc/acerca-de/noticias.html'
          },
          {
            text: 'header.reconocimientos',
            url: 'https://www.redalyc.org/redalyc/acerca-de/reconocimientos.html'
          },
          {
            text: 'header.oai',
            url: 'https://www.redalyc.org/redalyc/acerca-de/oai-pmh.html'
          },
          {
            text: 'header.sitio',
            url: 'https://www.redalyc.org/redalyc/acerca-de/buscador.html'
          },
          {
            text: 'header.uso',
            url: 'https://www.redalyc.org/redalyc/acerca-de/usolegal.html'
          },
          {
            text: 'header.publicaciones',
            url: 'https://www.redalyc.org/redalyc/acerca-de/productos.html'
          },
      ]
    },
    {
      text: 'header.acceso',
      url: 'https://www.redalyc.org/home.oa?id=accesso'
    },
    {
      text: 'header.valores',
      url: 'https://www.redalyc.org/home.oa?id=principios'
    },
    {
      text: 'header.jats',
      items: [
        {
          text: 'header.marcalyc',
          url: 'http://marcalyc.redalyc.org/'
        },
        {
          text: 'header.ojs',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'header.capacitacion',
          url: 'http://marcalyc.redalyc.org/ayuda/'
        },
        {
          text: 'header.generacion',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'header.visor',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'header.movil',
          url: 'https://www.redalyc.org/'
        }
      ]
    },
    {
      text: 'header.indexacion',
      items: [
        {
          text: 'header.consolidadas.redalyc',
          items: [
            {
              text: 'header.evaluacion',
              url: 'https://www.redalyc.org/postulacion.oa?q=criterios'
            },
            {
              text: 'header.postulacion',
              url: 'https://www.redalyc.org/postulacion.oa?q=proceso'
            }
          ],
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'header.consolidadas.amelica',
          items: [
            {
              text: 'header.evaluacion',
              url: 'http://portal.amelica.org/microPortal.oa?opcion=postula'
            },
            {
              text: 'header.postulacion',
              url: 'http://portal.amelica.org/microPortal.oa?opcion=postula'
            }
          ],
          url: 'http://portal.amelica.org/'
        }
      ]
    },
    {
      text: 'header.servicios',
      url: 'https://www.redalyc.org/home.oa?id=servicios'
    }
  ];

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openNav(): void {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  closeMenu(): void {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  toCould() {
    document.getElementById("could").scrollIntoView({ behavior: "smooth" });
    this.selection = 2;
  }
  toSearcher() {
    document.getElementById("searcher").scrollIntoView({ behavior: "smooth" });
    this.selection = 1;
  }
  toNetwork() {
    document.getElementById("network").scrollIntoView({ behavior: "smooth" });
    this.selection = 3;
  }
  toMap() {
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    this.selection = 4; // Set the selection explicitly
  }
  toSparql() {
    document.getElementById("sparql").scrollIntoView({ behavior: "smooth" });
    this.selection = 5;
  }
  toAbout() {
    this.router.navigate(["/acerca-de"]);
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const triggerPoint = 500; 
    this.isShow  = scrollPosition > 300;

    if (scrollTop >= triggerPoint) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }


}
