import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { ReviewService } from 'src/app/services/review/review.service';
import { Subject, Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/internal/operators';
import { Review } from 'src/app/services/review/review.model';
import { throwError } from 'rxjs/internal/observable/throwError';

interface ITemplateData{
  show: Show;
  reviews: Array<Review>;
}

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent{

  public constructor(private route:ActivatedRoute, private showService:ShowService, private reviewService:ReviewService) { }

  // public show: Show | undefined;
  public trigger$: Subject<null> = new Subject<null>();
  public show_id: string;

  public templateData$: Observable<ITemplateData> =  this.route.paramMap.pipe(
    switchMap(() =>{
      const id: string | null= this.route.snapshot.paramMap.get('id');
      if (!id) {
        return throwError('noId');
      }
      return combineLatest([this.showService.getById(id), this.reviewService.listReviews(id)])
    }
    ),
    map(([show, reviews]) => {
      return {show, reviews};

    }) 
  )

  //turn into a new inteface
  public onReviewAdd(reviewData: {comment: string, rating: number}): void{
    const showId: string | null = this.route.snapshot.paramMap.get('id');
    
    if (showId){
      this.reviewService.onReviewAdd({
        comment:reviewData.comment,
        rating: reviewData.rating,
        show_id: showId,
      }).subscribe(() => {
        this.trigger$.next();
      });
    }

  }}
