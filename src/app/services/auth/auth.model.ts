import { IRegisterFormData } from "src/app/pages/register-container/components/register-form/register-form.component";

export class Auth {
	public constructor (rawAuthData:IRegisterFormData){
		this.email = rawAuthData.email;
		this.password = rawAuthData.password;
	};

	public email:string;
	public password:string;
}

