import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const authors = value.split('<<<');
    let authorsFormat: string;
    for (let i = 0 ; i < authors.length; i++) {
     if (i === 0){
      authorsFormat = authors[i];
     }else if (i === (authors.length - 1)){
      authorsFormat = authorsFormat + authors[i] + '.';
     }
     else{
      authorsFormat = authorsFormat + ', ' + authors[i];
     }
    }
    return authorsFormat;
  }

}
