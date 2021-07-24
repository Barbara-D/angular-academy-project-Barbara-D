import { HttpResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators';
import { IAccount } from 'src/app/interfaces/account.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  constructor(private authService: AuthService, 
        private router: Router,
        private _snackBar: MatSnackBar){}
  
  public login(loginAccount: IAccount): void{
    // console.log(registerFormData);
    this.authService.onLogin(loginAccount).pipe (
      catchError(err => {
        if(err)
        {    
        console.log('Handling error locally and rethrowing it...', err);
        this.openSnackBar("This account does not exist", "OH NO :(");
        }
        return throwError(err);
    })
    )
    .subscribe((response: HttpResponse<any>) =>
    {
      // this.router.navigate(['']);
      console.log(response);
    });

}  
private openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}}
