import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = "dog";
  petImage = "https://james.codegym.vn/pluginfile.php/37397/mod_assign/intro/thu1.png";
  constructor() { }

  ngOnInit(): void {
  }

  changePetName(petName: string){
    this.petName = petName;

  }
  changePetImage(petImage: string){
    this.petImage = petImage;
  }

}
