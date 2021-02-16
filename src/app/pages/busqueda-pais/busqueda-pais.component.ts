import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/Article.model';
import { ArticleResult } from '../../models/ArticleResult.model';
import { ArticleService } from '../../services/article.service';
import { ErrorService } from '../../services/error.service';
import { FilterChain } from '../../models/FilterChain.model';
import { FilterService } from '../../services/filter.service';
import { PaginationService } from '../../services/pagination.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busqueda-pais',
  templateUrl: './busqueda-pais.component.html',
  styleUrls: ['./busqueda-pais.component.css']
})
export class BusquedaPaisComponent implements OnInit, OnDestroy {
  private finalPositionSubscription$: Subscription;
  private positionSubscription$: Subscription;
  private searchSubscription$: Subscription;
  private filtersChainSubscription$: Subscription;
  private subscriptionArray: Array<Subscription> = [];

  articles: Array<Article> = new Array<Article>();
  filtersChain: FilterChain = {
    yearChain: '',
    disciplineChain: '',
    countryChain: '',
    languageChain: '',
    fontChain: ''
  };
  view = true;
  countryId: string;
  countryIdCopy: string;
  positionPage = 1;
  finalPositionPage: number;
  totalResults: number;
  country: string;
  imgTable = 'assets/img/icons/table.png';
  imgList = 'assets/img/icons/list-act.png';

  constructor(
    private articleService: ArticleService,
    private errorService: ErrorService,
    private filterService: FilterService,
    private paginationService: PaginationService,
    private routeService: ActivatedRoute,
  ) {
    this.countryId = this.routeService.snapshot.paramMap.get('countryId');
  }

  ngOnInit(): void {
    this.finalPositionSubscription$ = this.paginationService.finalPosition$.subscribe(
      (finalPosition: number) => this.finalPositionPage = finalPosition
    );

    this.positionSubscription$ = this.paginationService.position$.subscribe(
      (position: number) => {
        this.positionPage = position;

        this.articleService.getArticlesByCountry(this.countryId, position, this.filtersChain).subscribe(
          (articles: ArticleResult) => {
            this.articles = articles.resultados;
            this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
          }
        );
      }
    );

    this.searchSubscription$ = this.articleService.search$.subscribe(
      (search: string) => {
        this.positionPage = 1;
        this.countryIdCopy = this.countryId;
        this.countryId = search;
        this.filtersChain = {
          yearChain: '',
          disciplineChain: '',
          countryChain: '',
          languageChain: '',
          fontChain: ''
        };

        this.articleService.getArticlesByCountry(search, 1, this.filtersChain).subscribe(
          (articles: ArticleResult) => {
            if (this.articleService.articlesExists(articles.resultados.length)){
              this.articles = articles.resultados;
              this.totalResults = articles.totalResultados;
              this.filterService.changeFilters(articles.filtros);
              this.paginationService.changeInitialPosition();
              this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
            } else {
              this.errorService.showError(`No existen resultados para ${search} Sugerencias: Prueba con una búsqueda nueva`);
              this.countryId = this.countryIdCopy;
            }
          }
        );
      }
    );

    this.articleService.getArticlesByCountry(this.countryId, 1, this.filtersChain).subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.country = articles.resultados[0].nombrePais;
        this.totalResults = articles.totalResultados;
        this.filterService.changeFilters(articles.filtros);
        this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
      }
    );

    this.subscriptionArray.push(this.finalPositionSubscription$);
    this.subscriptionArray.push(this.positionSubscription$);
    this.subscriptionArray.push(this.searchSubscription$);
    this.subscriptionArray.push(this.filtersChainSubscription$);
  }

  ngOnDestroy(): void {
    console.log('Destroy page busqueda pais');
    this.subscriptionArray.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  searchArticlesByCountry(search: string): void {
    if (search){
      this.filterService.cleanFiltersSelected();
      this.articleService.changeSearch(search);
    }else{
      this.errorService.showError('Ingresé una palabra');
    }
  }

  changeView(state: boolean): void {
    this.view = state;
    if (state) {
      this.imgTable = 'assets/img/icons/table.png';
      this.imgList = 'assets/img/icons/list-act.png';
    } else {
      this.imgTable = 'assets/img/icons/table-act.png';
      this.imgList = 'assets/img/icons/list.png';
    }
  }

  goUp(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
