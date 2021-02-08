import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/Article.model';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() articles: Array<Article> = new Array<Article>();

  constructor() { }

  ngOnInit(): void {
  }

}
