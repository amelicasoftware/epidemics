import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItems: MenuItemModel[] = [
    {
      text: 'Acerca de Redalyc',
      items: [
          { text: 'Misión' },
          { text: 'Consejo asesor' },
          { text: 'Directorio' },
          { text: 'Cronología' },
          { text: 'Reconocimientos internacionales' },
          { text: 'OAI-PMH' },
          { text: 'Redalyc en tu sitio web' },
          { text: 'Uso legal' },
          { text: 'Publicaciones' },
      ]
    },
    {
      text: 'Accesso Abierto Diamante'
    },
    {
      text: 'Principios y Valores'
    },
    {
      text: 'Tecnología de Publicación Digital (XML JATS)',
      items: [
        { text: 'Marcalyc Sistema de Marcación (XML JATS)' },
        { text: 'Integración OJS' },
        { text: 'Capacitación XML JATS' },
        { text: 'Generación Automática de ePUB, PDF HTML' },
        { text: 'Visor de artículos' },
        { text: 'Visor móvil de articulos' }
      ]
    },
    {
      text: 'Indexación de Revistas',
      items: [
        {
          text: 'Índice de Revistas Consolidadas Redalyc',
          items: [
            { text: 'Criterios de evaluación'},
            { text: 'Proceso de postulación'}
          ]
        },
        {
          text: 'Índice de Revistas en consolidación AmeliCA',
          items: [
            { text: 'Criterios de evaluación'},
            { text: 'Proceso de postulación'}
          ]
        }
      ]
    },
    { text: 'Servicios' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
