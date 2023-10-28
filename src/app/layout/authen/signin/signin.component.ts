import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authen/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor (private authService:AuthService){
    localStorage.clear();
  }
  isFormSubmitted:boolean=false;
form:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  psw:new FormControl('',Validators.required)
})
onSubmit(){
  // if(this.form.valid){
  //   this.authService.proceedLogin(this.form.value).subscribe()
  // }
  // this.isFormSubmitted=!this.isFormSubmitted;
}
}
