// export interface IRawShow{
// 	id: string;
// 	title: string;
// 	description?: string;
// 	averageRating: number;
// 	imageUrl: string;
// }

export interface IRawShow{
	id: string;
	average_rating: number;
	description: string;
	image_url: string;
	no_of_reviews: number;
	title: string;
}