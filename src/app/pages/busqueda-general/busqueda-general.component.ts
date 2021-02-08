import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../models/Article.model';
import { ArticleResult } from '../../models/ArticleResult.model';
import { ArticleService } from '../../services/article.service';
import { FilterChain } from '../../models/FilterChain.model';
import { FilterService } from '../../services/filter.service';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-busqueda-general',
  templateUrl: './busqueda-general.component.html',
  styleUrls: ['./busqueda-general.component.css']
})
export class BusquedaGeneralComponent implements OnInit, OnDestroy{
  finalPositionSubscription: Subscription;
  positionSubscription: Subscription;
  searchSubscription: Subscription;
  filtersChainSubscription: Subscription;

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
  positionPage = 1;
  view = true;
  imgTable = 'assets/img/shared/table.png';
  imgList = 'assets/img/shared/list-act.png';
  results = true;

  constructor(
    private articleService: ArticleService,
    private paginationService: PaginationService,
    private filterService: FilterService,
  ) { }

  ngOnDestroy(): void {
    this.finalPositionSubscription.unsubscribe();
    this.positionSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.filtersChainSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.finalPositionSubscription = this.paginationService.finalPosition$.subscribe(
      (finalPosition: number) => this.finalPositionPage = finalPosition
    );

    this.positionSubscription = this.paginationService.position$.subscribe(
      (position: number) => {
        this.positionPage = position;

        this.articleService.getArticles('ciencia', position, this.filtersChain).subscribe(
          (articles: ArticleResult) => {
            this.articles = articles.resultados;
            this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
          }
        );
      }
    );

    this.searchSubscription = this.articleService.search$.subscribe(
      (search: string) => {
        this.positionPage = 1;
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
            this.articles = articles.resultados;
            this.results = this.articleService.articlesExists(articles.resultados.length);
            this.filterService.changeFilters(articles.filtros);
            this.paginationService.changeInitialPosition();
            this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
          }
        );
      }
    );

    this.filtersChainSubscription = this.filterService.filtersChain$.subscribe(
      (filtersChain: FilterChain) => {
        this.filtersChain = filtersChain;
        this.articleService.getArticles(
          'ciencia',
          1,
          this.filtersChain
        ).subscribe(
          (articles: ArticleResult) => {
            this.positionPage = 1;
            this.articles = articles.resultados;
            this.filterService.changeFilters(articles.filtros);
            this.paginationService.changeInitialPosition();
            this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
          }
        );
      }
    );

    this.articleService.getArticles('ciencia', 1, this.filtersChain).subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.results = this.articleService.articlesExists(articles.resultados.length);
        this.filterService.changeFilters(articles.filtros);
        this.paginationService.changeFinalPosition(articles.totalResultados, 'articles');
      }
    );
  }

  changeView(state: boolean){
    this.view = state;
    if (state) {
      this.imgTable = 'assets/img/shared/table.png';
      this.imgList = 'assets/img/shared/list-act.png';
    } else {
      this.imgTable = 'assets/img/shared/table-act.png';
      this.imgList = 'assets/img/shared/list.png';
    }
  }

  goUp(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
