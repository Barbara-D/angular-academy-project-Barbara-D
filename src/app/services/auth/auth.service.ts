import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/internal/operators';
import { IAccount } from 'src/app/interfaces/account.interface';
import { IAuthData } from 'src/app/interfaces/auth-data.interface';
import { IRegisterFormData } from 'src/app/pages/register-container/components/register-form/register-form.component';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authDataKey:string = 'authData';

  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();
  
  constructor(private http: HttpClient, private storage: StorageService){};

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

      if ( uid && access && client){
        this.saveAuthData({uid, 'access-token': access, client});
        this._isLoggedIn$.next(true);
      }
      // console.log(uid, access, client);
    })
    );
  }

  private saveAuthData(authData:IAuthData): void{
    this.storage.add(this.authDataKey, authData);
  }

  public getAuthData(): IAuthData | null{
    return this.storage.get(this.authDataKey);
  }

  public logOut(): void{
    this.storage.remove(this.authDataKey);
    this._isLoggedIn$.next(false);

  }

}
