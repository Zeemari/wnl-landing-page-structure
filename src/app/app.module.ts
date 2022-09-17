import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { WhyWnlComponent } from './Pages/why-wnl/why-wnl.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { NavbarComponent } from './Shared/layout/navbar/navbar.component';
import { FooterComponent } from './Shared/layout/footer/footer.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { DetailsComponent } from './Pages/blog/details/details.component';
import { FormComponent } from './layout/form/form.component';
import { SendmoneyComponent } from './Shared/layout/sendmoney/sendmoney.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    WhyWnlComponent,
    HomeComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    DetailsComponent,
    FormComponent,
    SendmoneyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
