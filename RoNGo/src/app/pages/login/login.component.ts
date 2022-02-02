import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/interfaces/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: LoginDTO = {
    email:"",
    password:""
  }
  public error:boolean | string = false;

  constructor() { }

  ngOnInit(): void {
  }

  isNotValid():boolean{
    return !this.user.email || !this.user.password;
  }

  doLogin(){
    this.error = false;
    if(this.validateEmail(this.user.email)){
      //TODO : trimitem requestul de login
    }else{
      this.error = "The email you inserted is invalid!";
    }
  }

  validateEmail(email:string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
  }
}

