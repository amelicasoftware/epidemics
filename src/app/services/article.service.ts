import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleResult } from '../models/ArticleResult.model';
import { FilterChain } from '../models/FilterChain.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  search$: EventEmitter<string> = new EventEmitter<string>();
  public url: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  changeSearch(search: string){
    this.search$.emit(search);
  }

  getArticles(
    search: string,
    page: number,
    filters: FilterChain
  ): Observable<ArticleResult>{
    console.log('Servicio Articulos:', `${this.url}articulos/epidemics/${search}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
    return this.http.get<ArticleResult>(`${this.url}articulos/epidemics/${search}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
  }

  articlesExists(articlesLength: number): boolean{
    let articlesExists: boolean;
    articlesLength ? articlesExists = true : articlesExists = false;
    return articlesExists;
  }
}
