import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {
  finalPageSubscription: Subscription;
  initialPageSubscription: Subscription;

  final: number;
  actualPage = 1;

  constructor( private paginationService: PaginationService ) { }

  ngOnDestroy(): void {
    console.log('Destroy component New Pagination');
    this.finalPageSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initialPageSubscription = this.paginationService.initialPosition$.subscribe(
      (initialPage: number) => this.actualPage = initialPage
    );

    this.finalPageSubscription = this.paginationService.finalPosition$.subscribe(
      (finalPage: number) => this.final = finalPage
    );

  }

  public initialPage(){
    this.actualPage = 1;
    this.paginationService.changePosition(this.actualPage);
  }

  public leftArrow(){
    this.actualPage = this.actualPage - 1;
    this.paginationService.changePosition(this.actualPage);
  }

  public nextOrpreviousPage(page: number){
    this.actualPage = page;
    this.paginationService.changePosition(this.actualPage);
  }

  public rightArrowPage() {
    this.actualPage = this.actualPage + 1;
    this.paginationService.changePosition(this.actualPage);
  }

  public finalPage(){
    this.actualPage = this.final;
    this.paginationService.changePosition(this.actualPage);
  }

}
