import { Component } from '@angular/core';

@Component({
  selector: 'app-img-pricename',
  templateUrl: './img-pricename.component.html',
  styleUrls: ['./img-pricename.component.css']
})
export class ImgPricenameComponent {
  homes = [
    {
      price: '$774,000',
      title: 'House in Arlington, VA',
      image: '../images/productgrid/house1.jpeg',
      status: 'New' // Added status property
    },
    {
      price: '$540,000',
      title: 'Condo in Arlington, VA',
      image: '../images/productgrid/house1.jpeg',
      status: 'For Sale' // Added status property
    },
    {
      price: '$645,000',
      title: 'Townhouse in Arlington, VA',
      image: '../images/productgrid/house1.jpeg',
      status: 'New' // Added status property
    },
    {
      price: '$678,000',
      title: 'Condo in Arlington, VA',
      image: '../images/productgrid/house1.jpeg',
      status: 'For Sale' // Added status property
    }
  ];

  
}

