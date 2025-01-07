import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   isSidebarOpen = false;  // Manage sidebar state

  // Method to toggle sidebar state
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;  // Toggle the sidebar state
  }
}
