import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/interfaces/account.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  constructor(private authService: AuthService, private router: Router){}
  
  public login(loginAccount: IAccount): void{
    // console.log(registerFormData);
    this.authService.onLogin(loginAccount).subscribe((account:IAccount) =>
    {
      this.router.navigate(['']);
      console.log(account);
    });
}}
