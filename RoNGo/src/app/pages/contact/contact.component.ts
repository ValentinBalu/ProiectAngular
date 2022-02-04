import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
  }
  userLogout(){
    this._service.logoutUser();
  }

}
