import { Component, OnInit } from '@angular/core';
import { LocationDTO } from 'src/app/interfaces/location-dto';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public locations:LocationDTO[]=[
    {
      name:"Vârful Tâmpa",
      description:['Brașov','4.7/5'],
      imageSrc:"assets/images/tampa.jpg",
      imageAlt:"Tampa",
      isVisited:false
    },
    {
      name:"Palatul Culturii Iași",
      description:['Iași','4.8/5'],
      imageSrc:"assets/images/iasi.jpg",
      imageAlt:"Iasi",
      isVisited:false
    },
    {
      name:"Coloana Infinitului",
      description:['Târgu-Jiu','5/5'],
      imageSrc:"assets/images/infinit.jpg",
      imageAlt:"Coloana Infinitului",
      isVisited:false
    },
    {
      name:"Mânăstirea Voroneț",
      description:['Gura Humorului','4.6/5'],
      imageSrc:"assets/images/voronet.jpg",
      imageAlt:"Voronet",
      isVisited:false
    },
    {
      name:"Lacul Sfânta Ana",
      description:['Harghita','4.8/5'],
      imageSrc:"assets/images/sfana.jpg",
      imageAlt:"Sfanta Ana",
      isVisited:false
    },
    {
      name:"Salina Turda",
      description:['Turda','4.9/5'],
      imageSrc:"assets/images/turda.jpg",
      imageAlt:"Turda",
      isVisited:false
    },
    {
      name:"Cazanele Dunării",
      description:['Dubova','4.8/5'],
      imageSrc:"assets/images/dubova.jpg",
      imageAlt:"Dubova",
      isVisited:false
    },
    {
      name:"Cetatea Alba Carolina",
      description:['Alba Iulia','4.7/5'],
      imageSrc:"assets/images/alba.jpg",
      imageAlt:"Cetatea Alba",
      isVisited:false
    },
    {
      name:"Castelul Peleș",
      description:['Sinaia','5/5'],
      imageSrc:"assets/images/peles.jpg",
      imageAlt:"Peles",
      isVisited:false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  visit(i:number){
    this.locations[i].isVisited=!this.locations[i].isVisited;
  }

}
