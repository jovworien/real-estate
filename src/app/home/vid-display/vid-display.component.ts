import { Component } from '@angular/core';

@Component({
  selector: 'app-vid-display',
  templateUrl: './vid-display.component.html',
  styleUrl: './vid-display.component.css'
})
export class VidDisplayComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  } 

 

}
