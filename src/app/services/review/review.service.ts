import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators';
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
      comment: "Watched through all seasons. Most episodes were quite good, but some of them were mediocre at best. I loved the original direction but latter seasons were a bit over the top. Still recommend overall.",
      showId: "1"
    },    
    {
      id: "2",
      rating: 5,
      comment: "One of my favourite shows ever!",
      showId: "1"
    },
    {
      id: "3",
      rating: 3,
      comment: "meeeh",
      showId: "1"
    },
    {
      id: "4",
      rating: 4,
      comment: "Watched through all seasons. Most episodes were quite good, but some of them were mediocre at best. I loved the original direction but latter seasons were a bit over the top. Still recommend overall.",
      showId: "2"
    },    
    {
      id: "5",
      rating: 5,
      comment: "One of my favourite shows ever!",
      showId: "3"
    },
    {
      id: "6",
      rating: 3,
      comment: "meeeh",
      showId: "3"
    },
  ];

  private get reviews(): Array<Review>{
    return this.rawData.map((rawReviewData: IReview) => new Review(rawReviewData));
  };

  public getReviews(): Observable<Array<Review>>{
    return of(this.reviews).pipe();
  }

  public getByShowId(showId: string): Observable<Array<Review> | null>{
    return this.getReviews().pipe(
      map((reviews) => reviews.filter((review: Review) => review.showId === showId) || null));
  }
};