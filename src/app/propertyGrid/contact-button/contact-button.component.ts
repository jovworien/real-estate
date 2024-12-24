import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.css'
})
export class ContactButtonComponent {
 products = [
    {
      name: 'Chair',
      image: '../images/productgrid/house1.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1000,
      isLoved: false
    },
    {
      name: 'Bed',
      image: '../images/productgrid/house2.jpeg',
    },
    {
      name: 'House Items',
      image: '../images/productgrid/house3.jpeg',
      isLoved: false
    }, 

  ];


}
