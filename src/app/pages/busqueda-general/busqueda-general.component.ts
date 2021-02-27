import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../models/Article.model';
import { ArticleResult } from '../../models/ArticleResult.model';
import { ArticleService } from '../../services/article.service';
import { ErrorService } from '../../services/error.service';
import { FilterChain } from '../../models/FilterChain.model';
import { FilterService } from '../../services/filter.service';
import { PaginationService } from '../../services/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-general',
  templateUrl: './busqueda-general.component.html',
  styleUrls: ['./busqueda-general.component.css']
})
export class BusquedaGeneralComponent implements OnInit, OnDestroy{
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
  finalPositionPage: number;
  search: string;
  searchCopy: string;
  positionPage = 1;
  view = true;
  imgTable = 'assets/img/icons/table.png';
  imgList = 'assets/img/icons/list-act.png';
  results = true;
  totalResults: number;

  constructor(
    private articleService: ArticleService,
    private errorService: ErrorService,
    private paginationService: PaginationService,
    private routeService: ActivatedRoute,
    private filterService: FilterService,
  ) {
    this.search = this.routeService.snapshot.paramMap.get('search');
  }

  ngOnInit(): void {
    this.finalPositionSubscription$ = this.paginationService.finalPosition$.subscribe(
      (finalPosition: number) => this.finalPositionPage = finalPosition
    );

    this.positionSubscription$ = this.paginationService.position$.subscribe(
      (position: number) => {
        this.positionPage = position;

        this.articleService.getArticles(this.search, position, this.filtersChain).subscribe(
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
        this.searchCopy = this.search;
        this.search = search;
        this.filtersChain = {
          yearChain: '',
          disciplineChain: '',
          countryChain: '',
          languageChain: '',
          fontChain: ''
        };

        this.articleService.getArticles(search, 1, this.filtersChain).subscribe(
          (articles: ArticleResult) => {
            if (this.articleService.articlesExists(articles.resultados.length)){
              this.articles = articles.resultados;
              this.totalResults = articles.totalResultados;
              this.results = this.articleService.articlesExists(articles.resultados.length);
              this.filterService.changeFilters(articles.filtros);
              this.paginationService.changeInitialPosition();
              this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
            } else {
              this.errorService.showErrorSearchs(`No existen resultados para ${search}. Sugerencias: Prueba con una búsqueda nueva`);
              this.search = this.searchCopy;
            }
          }
        );
      }
    );

    this.filtersChainSubscription$ = this.filterService.filtersChain$.subscribe(
      (filtersChain: FilterChain) => {
        this.filtersChain = filtersChain;
        this.articleService.getArticles(
          this.search,
          1,
          this.filtersChain
        ).subscribe(
          (articles: ArticleResult) => {
            if (this.articleService.articlesExists(articles.resultados.length)){
              this.positionPage = 1;
              this.articles = articles.resultados;
              this.totalResults = articles.totalResultados;
              this.filterService.changeFilters(articles.filtros);
              this.paginationService.changeInitialPosition();
              this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
            } else {
              this.errorService.showErrorSearchs('No existen resultados para la combinación de filtros');
              this.searchArticles(this.search);
            }
          }
        );
      }
    );

    if (!this.search){
      this.results = false;
      this.errorService.showErrorNullArticles().then(
        (value: string) => this.search = value
      ).finally(
        () => {
          this.searchArticles(this.search.trim());
        }
      );
    } else {
      this.getArticles();
    }

    this.subscriptionArray.push(this.finalPositionSubscription$);
    this.subscriptionArray.push(this.positionSubscription$);
    this.subscriptionArray.push(this.searchSubscription$);
    this.subscriptionArray.push(this.filtersChainSubscription$);
  }

  ngOnDestroy(): void {
    console.log('Destroy page busqueda general');
    this.filterService.cleanFiltersSelected();
    this.subscriptionArray.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  getArticles(): void{
    this.articleService.getArticles(this.search, 1, this.filtersChain).subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.totalResults = articles.totalResultados;
        this.results = this.articleService.articlesExists(articles.resultados.length);
        this.filterService.changeFilters(articles.filtros);
        this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
      }
    );
  }

  searchArticles(search: string): void {
    if (search){
      this.filterService.cleanFiltersSelected();
      this.articleService.changeSearch(search);
    }else{
      this.errorService.showErrorSearchs('Ingrese una palabra');
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
