import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IRegisterFormData } from './components/register-form/register-form.component';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent  {
  constructor(private authService: AuthService, private router: Router){}

  public onAccountAdd(registerFormData: IRegisterFormData): void{
    // console.log(registerFormData);
    this.authService.onAccountAdd(registerFormData).subscribe();
    this.router.navigate(['']);
  }


}
