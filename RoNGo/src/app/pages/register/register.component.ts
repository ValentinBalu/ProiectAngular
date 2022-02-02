import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm!:FormGroup; //poate fi si null

  // public passwordAdvice = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      age:[null,[Validators.required,Validators.min(1),Validators.max(150)]],
      password:["",[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]]
    })
  }

  // showPasswordAdvice(){
  //   this.passwordAdvice=!this.passwordAdvice;
  // }

  doRegister(){
    console.log(this.myForm);
  }

//   if(!this.validatePassword(this.user.password)){
//     this.error="The password should contain at least one digit, one upper case letter and one special character(!@#$%^&*)"
// }
}
