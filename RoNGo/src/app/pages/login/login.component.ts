import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/login-dto';
import { RegisterService } from 'src/app/services/register.service';

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

  constructor(private _service : RegisterService, private _router : Router) { }

  ngOnInit(): void {
  }

  isNotValid():boolean{
    return !this.user.email || !this.user.password;
  }

  doLogin(){
    this.error = false;
    if(this.validateEmail(this.user.email)){
      //trimitem requestul de login
      this._service.loginUserFromRemote(this.user).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',  JSON.stringify(response));
        this._router.navigate(['/profile'])
    })}else{
      this.error = "The email you inserted is invalid!";
    }
  }

  validateEmail(email:string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
  }
}

