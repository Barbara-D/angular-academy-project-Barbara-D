export class Show {
	constructor (rawShowData:any){
		this.id = rawShowData.id;
		this.title = rawShowData.title;
		this.description = rawShowData.description || "Default description";
		this.averageRating = rawShowData.averageRating;
		this.imageUrl = rawShowData.imageUrl;
	}

	id:string;
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;

	calculatePercentage() {
		console.log(Math.round((this.averageRating/5)*100)+"%");
	}

}