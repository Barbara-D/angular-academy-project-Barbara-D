import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent{

    public loginFormGroup: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  
    public onLogin():void{
      console.log(this.loginFormGroup.value);
      this.loginFormGroup.reset();
    };
  
    // public getErrorMessage():string{
    //   if (this.loginFormGroup.get('email')?.hasError('required')) {
    //     return 'You must enter a value';
    //   }
    //   else if (this.registerFormGroup.get('email')?.hasError('badWord')){
    //     return 'No swearing!';
    //   }
    //   return this.registerFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
    // };
  
    constructor(private fb: FormBuilder){};


}
