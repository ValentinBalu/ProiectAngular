import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  goToCatalogue(){
    this.router.navigate(['\catalogue']);
  }
  userLogout(){
    this._service.logoutUser();
  }
}
