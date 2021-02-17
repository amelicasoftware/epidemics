import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentSection: string;

  public menuItems: MenuItemModel[] = [
    {
      text: 'Acerca de Redalyc',
      items: [
          {
            text: 'Misión',
            url: 'https://www.redalyc.org/redalyc/acerca-de/mision.html'
          },
          {
            text: 'Consejo asesor',
            url: 'https://www.redalyc.org/redalyc/acerca-de/comite.html'
          },
          {
            text: 'Directorio',
            url: 'https://www.redalyc.org/redalyc/acerca-de/directorio.html'
          },
          {
            text: 'Cronología',
            url: 'https://www.redalyc.org/redalyc/acerca-de/noticias.html'
          },
          {
            text: 'Reconocimientos internacionales',
            url: 'https://www.redalyc.org/redalyc/acerca-de/reconocimientos.html'
          },
          {
            text: 'OAI-PMH',
            url: 'https://www.redalyc.org/redalyc/acerca-de/oai-pmh.html'
          },
          {
            text: 'Redalyc en tu sitio web',
            url: 'https://www.redalyc.org/redalyc/acerca-de/buscador.html'
          },
          {
            text: 'Uso legal',
            url: 'https://www.redalyc.org/redalyc/acerca-de/usolegal.html'
          },
          {
            text: 'Publicaciones',
            url: 'https://www.redalyc.org/redalyc/acerca-de/productos.html'
          },
      ]
    },
    {
      text: 'Accesso Abierto Diamante',
      url: 'https://www.redalyc.org/home.oa?id=accesso'
    },
    {
      text: 'Principios y Valores',
      url: 'https://www.redalyc.org/home.oa?id=principios'
    },
    {
      text: 'Tecnología de Publicación Digital (XML JATS)',
      items: [
        {
          text: 'Marcalyc Sistema de Marcación (XML JATS)',
          url: 'http://marcalyc.redalyc.org/'
        },
        {
          text: 'Integración OJS',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'Capacitación XML JATS',
          url: 'http://marcalyc.redalyc.org/ayuda/'
        },
        {
          text: 'Generación Automática de ePUB, PDF HTML',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'Visor de artículos',
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'Visor móvil de articulos',
          url: 'https://www.redalyc.org/'
        }
      ]
    },
    {
      text: 'Indexación de Revistas',
      items: [
        {
          text: 'Índice de Revistas Consolidadas Redalyc',
          items: [
            {
              text: 'Criterios de evaluación',
              url: 'https://www.redalyc.org/postulacion.oa?q=criterios'
            },
            {
              text: 'Proceso de postulación',
              url: 'https://www.redalyc.org/postulacion.oa?q=proceso'
            }
          ],
          url: 'https://www.redalyc.org/'
        },
        {
          text: 'Índice de Revistas en consolidación AmeliCA',
          items: [
            {
              text: 'Criterios de evaluación',
              url: 'http://portal.amelica.org/microPortal.oa?opcion=postula'
            },
            {
              text: 'Proceso de postulación',
              url: 'http://portal.amelica.org/microPortal.oa?opcion=postula'
            }
          ],
          url: 'http://portal.amelica.org/'
        }
      ]
    },
    {
      text: 'Servicios',
      url: 'https://www.redalyc.org/home.oa?id=servicios'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
