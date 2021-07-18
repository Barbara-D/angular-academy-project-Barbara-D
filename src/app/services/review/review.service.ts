import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { delay, map } from 'rxjs/internal/operators';
import { IReview } from 'src/app/interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private rawData: Array<IReview> = [
    {
      id: "1",
      rating: 4,
      comment: "Generic review",
      showId: "1"
    },
    {
      id: "2",
      rating: 5,
      comment: "Generic review",
      showId: "3"
    },
  ];

  private get reviews(): Array<Review>{
    return this.rawData.map((rawReviewData: IReview) => new Review(rawReviewData));
  };

  public getReviews(): Observable<Array<Review>>{
    return of(this.reviews).pipe(delay (1000 + Math.random()*1000)) ;
  }

  public getByShowId(showId: string): Observable<Array<Review> | null>{
    return this.getReviews().pipe(
      map((reviews) => reviews.filter((review: Review) => review.showId === showId) || null));
  }
};