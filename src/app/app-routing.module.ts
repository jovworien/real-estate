import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VidDisplayComponent } from './home/vid-display/vid-display.component';
import { SlideDisplayComponent } from './home/slide-display/slide-display.component';
import { ImgDisplayComponent } from './home/img-display/img-display.component';
import { ImgPricenameComponent } from './propertyGrid/img-pricename/img-pricename.component';
import { ContactButtonComponent } from './propertyGrid/contact-button/contact-button.component';
import { OpenDesignComponent } from './propertyGrid/open-design/open-design.component';
import { Display1Component } from './about/display1/display1.component';
import { Display2Component } from './about/display2/display2.component';
import { Display3Component } from './about/display3/display3.component';
import { Signup1Component } from './realtor/signup1/signup1.component';
import { Signup2Component } from './realtor/signup2/signup2.component';
import { Signup3Component } from './realtor/signup3/signup3.component';
import { Login1Component } from './realtor/login1/login1.component';
import { Login2Component } from './realtor/login2/login2.component';
import { Login3Component } from './realtor/login3/login3.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LogoutComponent } from './dashboard/logout/logout.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { PropertiesComponent } from './dashboard/properties/properties.component';
import { MypropertiesComponent } from './dashboard/myproperties/myproperties.component';
import { InvstOffersComponent } from './dashboard/invst-offers/invst-offers.component';
import { MyInvstComponent } from './dashboard/my-invst/my-invst.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';



const routes: Routes = [
  { path: '', redirectTo: 'img-display', pathMatch: 'full' },
  { path: 'vid-display', component: VidDisplayComponent },
  { path: 'slide-display', component: SlideDisplayComponent },
  { path: 'img-display', component: ImgDisplayComponent },
  { path: 'img-pricename', component: ImgPricenameComponent },
  { path: 'contact-button', component: ContactButtonComponent },
  { path: 'open-design', component: OpenDesignComponent },
  { path: 'display1', component: Display1Component },
  { path: 'display2', component: Display2Component },
  { path: 'display3', component: Display3Component },
  { path: 'signup1', component: Signup1Component },
  { path: 'signup2', component: Signup2Component },
  { path: 'signup3', component: Signup3Component },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'dashboard/logout', component: LogoutComponent },
  { path: 'dashboard/header', component: HeaderComponent },
  { path: 'dashboard/footer', component: FooterComponent },
  { path: 'dashboard/properties', component: PropertiesComponent },
  { path: 'dashboard/myproperties', component: MypropertiesComponent },
  { path: 'dashboard/invst-offers', component: InvstOffersComponent },
  { path: 'dashboard/my-invst', component: MyInvstComponent },
  { path: 'dashboard/profile', component: ProfileComponent },
  { path: 'dashboard/dashboard', component: DashboardComponent }, 
  { path: 'dashboard/navbar', component: NavbarComponent },
  { path: 'dashboard/sidebar', component: SidebarComponent }, 
  { path: 'dashboard/profile', component: ProfileComponent },
  // { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
