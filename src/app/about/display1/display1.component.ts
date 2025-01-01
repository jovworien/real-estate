import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)',
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('hidden => visible', animate('0.8s ease-out')),
    ]),
  ]
})
export class Display1Component {
  imageState = 'hidden'; // Initial state of the image

  ngOnInit() {
    // Trigger the animation after a delay
    setTimeout(() => {
      this.imageState = 'visible';
    }, 200); // Adjust delay as needed
  }
}
