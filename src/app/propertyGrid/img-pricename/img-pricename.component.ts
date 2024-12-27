import { Component } from '@angular/core';

@Component({
  selector: 'app-img-pricename',
  templateUrl: './img-pricename.component.html',
  styleUrl: './img-pricename.component.css'
})
export class ImgPricenameComponent {
  products = [
    {
      name: 'Hair',
      image: '../images/productgrid/house1.jpeg',
      oldPrice: 1200, 
      newPrice: 1000
    },
    {
      name: 'Hair ',
      image: '../images/productgrid/house1.jpeg',
      oldPrice: 1500, 
      newPrice: 1200 
    },
    {
      name: 'Woman hair',
      image: '../images/Hair/hair_2.jpeg',
      oldPrice: 1400, 
      newPrice: 1200  
    },
    {
      name: 'Hair',
      image: '../images/Hair/hair_5.jpeg',
      oldPrice: 1400, 
      newPrice: 1200  
    }
  ];
}
