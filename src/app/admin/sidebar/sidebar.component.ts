import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarVisible: boolean = false;
  isSubmenuOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log('Sidebar visibility:', this.isSidebarVisible);
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
    console.log('Submenu visibility:', this.isSubmenuOpen);
  }
}
