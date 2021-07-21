import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenMailValidator } from 'src/app/validators/forbidden-mail.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  public registerFormGroup: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, forbiddenMailValidator]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatedPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  public onRegister():void{
    console.log(this.registerFormGroup.value);
    this.registerFormGroup.reset();
    this.router.navigate(['']);

  };

  public getErrorMessage():string{
    if (this.registerFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.registerFormGroup.get('email')?.hasError('badWord')){
      return 'No swearing!';
    }
    return this.registerFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
    ){};
}
