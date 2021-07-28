import { IReview } from "src/app/interfaces/review.interface";

export class Review {
	public constructor (rawReviewData:IReview){
		this.id = rawReviewData.id;
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
		this.show_id = rawReviewData.show_id;
	}

	public id : string;
	public rating : number;
	public comment: string;
	public show_id: string;
}

