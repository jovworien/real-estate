import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
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
import { MainComponent } from './admin/main/main.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AgentComponent } from './admin/agent/agent.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin/adminfooter/adminfooter.component';





@NgModule({
  declarations: [
    AppComponent,
    VidDisplayComponent,
    SlideDisplayComponent,
    ImgDisplayComponent,
    ImgPricenameComponent,
    ContactButtonComponent,
    OpenDesignComponent,
    Display1Component,
    Display2Component,
    Display3Component,
    Signup1Component,
    Signup2Component,
    Signup3Component,
    Login1Component,
    Login2Component,
    Login3Component,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    PropertiesComponent,
    MypropertiesComponent,
    InvstOffersComponent,
    MyInvstComponent,
    ProfileComponent,
    NavbarComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    AgentComponent,
    ReportsComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
