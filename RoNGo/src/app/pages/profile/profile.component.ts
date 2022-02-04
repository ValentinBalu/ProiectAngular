import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/interfaces/register-dto';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userToken = localStorage.getItem('token')
  userIsLogged:boolean = false;

  user!: RegisterDTO;

  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
    if (this.userToken) {
      this.userIsLogged = true;
      this.user = JSON.parse(this.userToken);
    } else{
      this.userIsLogged = false;
    }
  }
  userLogout(){
    this._service.logoutUser();
  }
}
