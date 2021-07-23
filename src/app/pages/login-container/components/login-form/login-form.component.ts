import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccount } from 'src/app/interfaces/account.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent{
  @Output() addAccount: EventEmitter<IAccount>=new EventEmitter();


    public loginFormGroup: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  
    public onLogin():void{
      // console.log(this.loginFormGroup.value);
      this.addAccount.emit(this.loginFormGroup.value);
      this.loginFormGroup.reset();
    };


    constructor(private fb: FormBuilder){};


}
