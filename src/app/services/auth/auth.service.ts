import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { IAccount } from 'src/app/interfaces/account.interface';
import { IAuthData } from 'src/app/interfaces/auth-data.interface';
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
    // console.log(authData);
    // return of(authData);
    return this.http.post<IRegisterFormData>('https://tv-shows.infinum.academy/users', authData);
  }

  public onLogin(loginData:IAccount): Observable<any> {
    // console.log(loginData);
    return this.http.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginData, {observe: 'response'}).pipe(
    tap((response: HttpResponse<any>) => {
      const uid: string | null= response.headers.get('uid');
      const access : string | null = response.headers.get('access-token');
      const client: string | null = response.headers.get('client');

      console.log(uid, access, client);
    })
    );
  }

  private saveAuthData(authData:IAuthData): void{
    
  }

}
