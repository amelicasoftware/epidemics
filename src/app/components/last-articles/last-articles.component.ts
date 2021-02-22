import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';
import { Article } from 'src/app/models/Article.model';
import { ArticleResult } from 'src/app/models/ArticleResult.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  articles: Array<Article> = new Array<Article>();
  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articleService.getLastArticles().subscribe( (articles: string) => {
      // console.log(articles);
      let articlesArray: string[] = articles.split('<<<');
      // console.log(articlesArray);
      articlesArray.forEach((article) => {
        let dataArticle: string[] = article.split('%%%');
        // console.log(dataArticle);
        const cveArticle: number = Number( this.parserDataArticle(dataArticle[0]));
        const cveRevista:number = Number( this.parserDataArticle(dataArticle[1]) );
        const volumen:number = Number( this.parserDataArticle(dataArticle[2]) );
        const numrevnum: string = this.parserDataArticle(dataArticle[3]);
        const anio:number = Number( this.parserDataArticle(dataArticle[4]) );
        const numero:number = Number( this.parserDataArticle(dataArticle[5]) );
        const titulo:string = this.parserDataArticle(dataArticle[6]);
        const urlRevista:string = this.parserDataArticle(dataArticle[7]);
        const nombreRevista:string = this.parserDataArticle(dataArticle[8]);
        const autores:string = this.parserDataArticle(dataArticle[9]);
        const newArticle: Article = {
          cveArticulo: cveArticle,
          cveRevista,
          volumen,
          volRevNum: numrevnum,
          anio,
          numero,
          tituloArticulo: titulo,
          dominio: urlRevista,
          nombreRevista,
          autores
        }
        // console.log(newArticle);
        this.articles.push(newArticle);
      });
      console.log(this.articles);
    });
  }

  parserDataArticle(dataArticle: string){
    const data = dataArticle.split('::');
    return data[1];
  }
}
