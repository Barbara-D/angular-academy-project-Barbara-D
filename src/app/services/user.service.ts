import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Iuser } from '../interfaces/user.interface';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User>{
    return this.http.get<{user: Iuser}>(`https://tv-shows.infinum.academy/users/me`).pipe(
      map(({user} : {user: Iuser}) =>{
        return new User (user);
      })
      ); 
}
}

