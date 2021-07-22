import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRegisterFormData } from 'src/app/pages/register-container/components/register-form/register-form.component';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public onAccountAdd(authData:IRegisterFormData): Observable<IRegisterFormData>{
    console.log(authData);
    return of(authData);

  }
}
