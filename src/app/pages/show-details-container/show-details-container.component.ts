import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { ReviewService } from 'src/app/services/review/review.service';
import { Subject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { Review } from 'src/app/services/review/review.model';
import { IReview } from 'src/app/interfaces/review.interface';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent{

  public constructor(private route:ActivatedRoute, private showService:ShowService, private reviewService:ReviewService) { }

  // public show: Show | undefined;
  // public show_id$: Subject<string> = new Subject<string>();
  public show_id: string;

  public show$: Observable <Show | null> = this.route.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get("id");
      if (id)
      {
        // this.show_id$.next(id);
        this.show_id = id;
        return this.showService.getById(id);
      }
      return of(null);
    })
  );

  public reviews$: Observable <Array<Review> | null> = this.route.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get("id");
      if (id)
      {
        return this.reviewService.listReviews(id);
      }
      else{
        return of(null);
      }
    })
  );

  public onReviewAdd(reviewData: IReview): void{
    
    reviewData.show_id=this.show_id;

    //     show_id$.pipe(map((show_id: string) => {
    //       if(show_id){
    //         reviewData.show_id=show_id;
    //         console.log(show_id);
    //       }
    //       console.log("error")
    //     }));
    // console.log(reviewData);
    this.reviewService.onReviewAdd(reviewData).subscribe();

  }}
