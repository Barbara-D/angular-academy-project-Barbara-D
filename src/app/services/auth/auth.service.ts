import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account.interface';
import { IRegisterFormData } from 'src/app/pages/register-container/components/register-form/register-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){};

  // private get accounts(): Observable<Array<Auth>>{
  //   return this.http.get<Array<Auth>>('https://tv-shows.infinum.academy/users');
  // }

  public onAccountAdd(authData:IRegisterFormData): Observable<IRegisterFormData>{
    console.log(authData);
    // return of(authData);
    return this.http.post<IRegisterFormData>('https://tv-shows.infinum.academy/users', authData);
  }

  public onLogin(loginData:IAccount): Observable<IAccount> {
    console.log(loginData);
    return this.http.post<IAccount>('https://tv-shows.infinum.academy/users/sign_in', loginData)

  }

}
