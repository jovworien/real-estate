import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  listings = [
    {
      title: 'Luxury Villa in Beverly Hills',
      image: '../images/productgrid/house1.jpeg',
      price: '$2,500,000',
    },

    {
      title: 'Modern Apartment in New York',
      image: '../images/productgrid/house2.jpeg',
      price: '$850,000',
    },
    {
      title: 'Beach House in Miami',
      image: '../images/productgrid/house3.jpeg',
      price: '$1,200,000',
    },
  ];
}
