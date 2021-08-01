export interface IReview{
	id: string;
	rating: number;
	comment: string;
	show_id: string;
	user: {
		id: string;
		email: string;
		image_url: null;
	}
}