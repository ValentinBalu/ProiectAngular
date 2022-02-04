import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm!:FormGroup; //poate fi si null

  // public passwordAdvice = false;

  constructor(private _service: RegisterService,private _router: Router, private formBuilder:FormBuilder) { }

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
    this._service.registerUserFromRemote(this.myForm.value).subscribe((response:any)=>{
      console.log(response);
      this._router.navigate(['/login']);
    }
    )
  }

//   if(!this.validatePassword(this.user.password)){
//     this.error="The password should contain at least one digit, one upper case letter and one special character(!@#$%^&*)"
// }
}
