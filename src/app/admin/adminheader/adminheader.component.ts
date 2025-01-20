import { Component } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  
   isSidebarActive: boolean = false;
   toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    const toggler = document.querySelector('.sidebar-toggler');
    if (toggler) {
      toggler.classList.toggle('active', this.isSidebarActive);
    }
  }

  // toggleSidebar() {
  //   this.isSidebarActive = !this.isSidebarActive;
  //   const sidebarElement = document.querySelector('.sidebar');
  //   if (sidebarElement) {
  //     sidebarElement.classList.toggle('active', this.isSidebarActive);
  //   }
  // }
}
