import { Iuser } from "src/app/interfaces/user.interface";

export class User {
	public constructor (rawUserData:Iuser){
		this.id = rawUserData.id;
		this.email = rawUserData.email;
		this.image_url = rawUserData.image_url;
	}

	public id : string;
	public email: string;
	public image_url: string;
}