import { IReview } from "src/app/interfaces/review.interface";

export class Review {
	public constructor (rawReviewData:IReview){
		this.id = rawReviewData.id;
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
		this.show_id = rawReviewData.show_id;
		this.user = rawReviewData.user;
	}

	public id : string;
	public rating : number;
	public comment: string;
	public show_id: string;
	public user:{
		id: string;
		email: string;
		image_url: null;
	}
}
