import { IRawShow } from "src/app/interfaces/rawShow.interface";


export class Show {
	public constructor (rawShowData:IRawShow){
		this.id = rawShowData.id;
		this.title = rawShowData.title;
		this.description = rawShowData.description || "Default description";
		this.averageRating = rawShowData.averageRating;
		this.imageUrl = rawShowData.imageUrl;
	}

	public id:string;
	public title: string;
	public description: string;
	public averageRating: number;
	public imageUrl: string;

	public calculatePercentage():void {
		console.log(Math.round((this.averageRating/5)*100)+"%");
	}
}