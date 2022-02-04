import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginDTO } from '../interfaces/login-dto';
import { RegisterDTO } from '../interfaces/register-dto';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient, private _router: Router) {  }

  public loginUserFromRemote(user: LoginDTO):Observable<any>{
      return this._http.post<any>("http://localhost:8080/login", user)
  }
  public registerUserFromRemote(user: RegisterDTO):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register", user)
  }

  //double negate because we want a boolean value
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

}