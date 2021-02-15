import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() articles: Array<Article> = new Array<Article>();

  imagenR = 'assets/img/icons/des.png';
  imagenN = 'assets/img/icons/des.png';
  reverseR = true;
  reverseN = true;

  constructor() { }

  ngOnInit(): void {
  }

  reverse(field: string, reverse: boolean): void {
    /* const fieldSort: FiledSort = new FiledSort();
    fieldSort.field = field;
    fieldSort.reverse = reverse; */
    /* this.articleService.changeFiledSort(fieldSort);
    this.changeIcon(field, reverse); */
  }

  changeIcon(field: string, reverse: boolean): void {
    if (reverse && field === 'nombreRevista'){
      this.imagenR = 'assets/img/icons/as.png';
      this.reverseR = false;
    } else {
      this.imagenR = 'assets/img/icons/des.png';
      this.reverseR = true;
    }

    if (reverse && field === 'anio'){
      this.imagenN = 'assets/img/icons/as.png';
      this.reverseN = false;
    } else {
      this.imagenN = 'assets/img/icons/des.png';
      this.reverseN = true;
    }
  }

}
