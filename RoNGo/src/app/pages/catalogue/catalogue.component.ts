import { Component, OnInit } from '@angular/core';
import { LocationDTO } from 'src/app/interfaces/location-dto';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public locations:LocationDTO[]=[
    {
      index:1,
      name:"Vârful Tâmpa",
      description:['Brașov','4.7/5'],
      imageSrc:"assets/images/tampa.jpg",
      imageAlt:"Tampa",
      isVisited:false
    },
    {
      index:2,
      name:"Palatul Culturii Iași",
      description:['Iași','4.8/5'],
      imageSrc:"assets/images/iasi.jpg",
      imageAlt:"Iasi",
      isVisited:false
    },
    {
      index:3,
      name:"Coloana Infinitului",
      description:['Târgu-Jiu','5/5'],
      imageSrc:"assets/images/infinit.jpg",
      imageAlt:"Coloana Infinitului",
      isVisited:false
    },
    {
      index:4,
      name:"Mânăstirea Voroneț",
      description:['Gura Humorului','4.6/5'],
      imageSrc:"assets/images/voronet.jpg",
      imageAlt:"Voronet",
      isVisited:false
    },
    {
      index:5,
      name:"Lacul Sfânta Ana",
      description:['Harghita','4.8/5'],
      imageSrc:"assets/images/sfana.jpg",
      imageAlt:"Sfanta Ana",
      isVisited:false
    },
    {
      index:6,
      name:"Salina Turda",
      description:['Turda','4.9/5'],
      imageSrc:"assets/images/turda.jpg",
      imageAlt:"Turda",
      isVisited:false
    },
    {
      index:7,
      name:"Cazanele Dunării",
      description:['Dubova','4.8/5'],
      imageSrc:"assets/images/dubova.jpg",
      imageAlt:"Dubova",
      isVisited:false
    },
    {
      index:8,
      name:"Cetatea Alba Carolina",
      description:['Alba Iulia','4.7/5'],
      imageSrc:"assets/images/alba.jpg",
      imageAlt:"Cetatea Alba",
      isVisited:false
    },
    {
      index:9,
      name:"Castelul Peleș",
      description:['Sinaia','5/5'],
      imageSrc:"assets/images/peles.jpg",
      imageAlt:"Peles",
      isVisited:false
    },
  ]

  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
  }

  visit(i:number){
    this.locations[i].isVisited=!this.locations[i].isVisited;
  }

  userLogout(){
    this._service.logoutUser();
  }
}
