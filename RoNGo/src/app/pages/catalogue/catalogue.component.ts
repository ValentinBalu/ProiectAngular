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
      name:"Tâmpa Brașov",
      description:"Vârful Tâmpa este o atracție deosebită a orașului Brașov.",
      imageSrc:"assets/images/tampa.jpg",
      imageAlt:"Tampa"
    },
    {
      name:"Palatul Culturii Iași",
      description:"Palatul Culturii Iași este o atracție din Iași.",
      imageSrc:"assets/images/iasi.jpg",
      imageAlt:"Iasi"
    },
    {
      name:"Coloana Infinitului Târgu-Jiu",
      description:"Coloana Infinitului  este o atracție din Târgu-Jiu.",
      imageSrc:"assets/images/infinit.jpg",
      imageAlt:"Coloana Infinitului"
    },
    {
      name:"Coloana Infinitului Târgu-Jiu",
      description:"Coloana Infinitului  este o atracție din Târgu-Jiu.",
      imageSrc:"assets/images/infinit.jpg",
      imageAlt:"Coloana Infinitului"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
