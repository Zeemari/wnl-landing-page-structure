import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './layout/form/form.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { DetailsComponent } from './Pages/blog/details/details.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { WhyWnlComponent } from './Pages/why-wnl/why-wnl.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'why-wnl', component: WhyWnlComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blogs/:id', component: DetailsComponent },
  { path: 'forms', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
