import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  /*{path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'services',component:ServicesComponent},
  {path:'prices',component:PriceComponent},
  {path:'contact',component:ContactComponent},*/
  
  { path:'',component:HomepageComponent },
  { path:'aboutus',component:AboutusComponent },
  { path:'services',component:ServicesComponent },
  { path:'price',component:PriceComponent },
  { path:'contact',component:ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
