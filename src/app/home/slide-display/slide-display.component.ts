import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrl: './slide-display.component.css'
})
export class SlideDisplayComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  isSidebarActive = false;

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.hero-swiper', {
        loop: true,
        speed: 800,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}
