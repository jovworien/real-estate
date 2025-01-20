import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

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

  public config: any = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [6, 19, 8, 5, 7, 4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
          borderheight: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  public pieChartConfig: any = {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  };


  barchart: any;
  pieChart: any;
  ngOnInit(): void {
    this.barchart = new Chart('MyChart', this.config);
     // Initialize Pie Chart
   this.pieChart = new Chart('PieChart', this.pieChartConfig);
  }

  
  
}
  

