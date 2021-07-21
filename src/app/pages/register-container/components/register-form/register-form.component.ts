import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenMailValidator } from 'src/app/validators/forbidden-mail.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  public registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, forbiddenMailValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public onRegister():void{
    console.log(this.registerFormGroup.value);
  };

  public getErrorMessage():string{
    if (this.registerFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.registerFormGroup.get('email')?.hasError('badWord')){
      return 'No swearing';
    }
    return this.registerFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  };
}
