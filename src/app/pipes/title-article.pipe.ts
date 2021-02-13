import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleArticle'
})
export class TitleArticlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const titleArticle = value.split('<<<');

    for (let i = 0; i < titleArticle.length; i++){
      if (titleArticle[i] === 'es') {
          const titulo = titleArticle[i + 1];
          return titulo;
      }
      if (titleArticle[i] === 'en') {
          const titulo = titleArticle[i + 1];
          return titulo;
      }
      if (titleArticle[i] === 'pt') {
          const titulo = titleArticle[i + 1];
          return titulo;
      }else{
        return titleArticle[0];
      }
    }
  }

}
