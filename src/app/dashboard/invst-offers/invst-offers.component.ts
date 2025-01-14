import { Component } from '@angular/core';

@Component({
  selector: 'app-invst-offers',
  templateUrl: './invst-offers.component.html',
  styleUrl: './invst-offers.component.css'
})
export class InvstOffersComponent {
  stats = [
    { title: 'Total Offers', value: 150 },
    { title: 'Active Investments', value: 85 },
    { title: 'Completed Investments', value: 45 },
    { title: 'High ROI Opportunities', value: 20 },
  ];

 // List of investment offers
 investmentOffers = [
  {
    title: 'Luxury Apartments',
    image: '../images/investment/luxury-apartments.jpg',
    price: '$500,000',
    roi: '8%',
    location: 'Downtown, NY'
  },
  {
    title: 'Beachfront Villas',
    image: '../images/investment/beachfront-villas.jpg',
    price: '$1,200,000',
    roi: '12%',
    location: 'Miami, FL'
  },
  {
    title: 'Commercial Complex',
    image: '../images/investment/commercial-complex.jpeg',
    price: '$750,000',
    roi: '10%',
    location: 'Chicago, IL'
  },
];

  // Filter Options
  filterCriteria = {
    location: '',
    minPrice: null,
    maxPrice: null
  };

  filteredInvestments = [...this.investmentOffers];

  constructor() {}

  ngOnInit(): void {}

  // Filter Logic
  applyFilters(): void {
    const { location, minPrice, maxPrice } = this.filterCriteria;

    this.filteredInvestments = this.investmentOffers.filter((investmentOffers) => {
      const matchesLocation =
        !location || investmentOffers.location.toLowerCase().includes(location.toLowerCase());
      const matchesMinPrice =
        !minPrice || parseFloat(investmentOffers.price.replace(/[^0-9.-]+/g, '')) >= minPrice;
      const matchesMaxPrice =
        !maxPrice || parseFloat(investmentOffers.price.replace(/[^0-9.-]+/g, '')) <= maxPrice;

      return matchesLocation && matchesMinPrice && matchesMaxPrice;
    });
  }

  // Reset Filters
  resetFilters(): void {
    this.filterCriteria = { location: '', minPrice: null, maxPrice: null };
    this.filteredInvestments = [...this.investmentOffers];
  }

}
