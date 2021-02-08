import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() articles: Array<Article> = new Array<Article>();

  imagenR = 'assets/img/shared/des.png';
  imagenN = 'assets/img/shared/des.png';
  reverseR = true;
  reverseN = true;

  constructor() { }

  ngOnInit(): void {
  }

  reverse(field: string, reverse: boolean){
    /* const fieldSort: FiledSort = new FiledSort();
    fieldSort.field = field;
    fieldSort.reverse = reverse; */
    /* this.articleService.changeFiledSort(fieldSort);
    this.changeIcon(field, reverse); */
  }

  changeIcon(field: string, reverse: boolean){
    if (reverse && field === 'nombreRevista'){
      this.imagenR = 'assets/img/shared/as.png';
      this.reverseR = false;
    } else {
      this.imagenR = 'assets/img/shared/des.png';
      this.reverseR = true;
    }

    if (reverse && field === 'anio'){
      this.imagenN = 'assets/img/shared/as.png';
      this.reverseN = false;
    } else {
      this.imagenN = 'assets/img/shared/des.png';
      this.reverseN = true;
    }
  }

}
