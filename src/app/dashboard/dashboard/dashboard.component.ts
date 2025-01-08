import { Component,  OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  
  cards = [
    { title: 'Today Sale', value: '$1234' },
    { title: 'Total Sale', value: '$1234' },
    { title: 'Today Revenue', value: '$1234' },
    { title: 'Total Revenue', value: '$1234' },
  ];

  recentSales = [
    { date: '01 Jan 2045', invoice: 'INV-0123', customer: 'John Doe', amount: '$123', status: 'Paid' },
    { date: '02 Jan 2045', invoice: 'INV-0124', customer: 'Jane Smith', amount: '$456', status: 'Pending' },
    { date: '03 Jan 2045', invoice: 'INV-0125', customer: 'Mike Brown', amount: '$789', status: 'Overdue' },
   
  ];
  
  images = [
    { src: '../images/productgrid/house1.jpeg', alt: 'Image 1', caption: 'Property 1 Overview' },
    { src: '../images/productgrid/house2.jpeg', alt: 'Image 2', caption: 'Property 2 Overview' },
    { src: '../images/productgrid/house3.jpeg', alt: 'Image 3', caption: 'Property 3 Overview' },
  ];
  
 

  ngOnInit(): void {
   
  }

 

  
}
