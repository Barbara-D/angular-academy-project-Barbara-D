export class Show {
	constructor (rawShowData:any){
		this.title = rawShowData.title;
		this.description = rawShowData.description;
		this.averageRating = rawShowData.averageRating;
		this.imageUrl = rawShowData.imageUrl;
	}

	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;

	calculatePercentage() {
		console.log(Math.round((this.averageRating/5)*100)+"%");

	}
}