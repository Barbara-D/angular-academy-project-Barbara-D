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
    this.authService.onAccountAdd(registerFormData).subscribe((regData: IRegisterFormData) =>{
    this.router.navigate(['']);
    console.log(regData);
    });
  }}