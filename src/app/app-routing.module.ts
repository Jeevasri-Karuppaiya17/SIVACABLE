import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ZeepackageComponent } from './zeepackage/zeepackage.component';
import { StarpackageComponent } from './starpackage/starpackage.component';
import { SonypackageComponent } from './sonypackage/sonypackage.component';
import { ColorspackageComponent } from './colorspackage/colorspackage.component';
import { SunpackageComponent } from './sunpackage/sunpackage.component';
import { EtvpackageComponent } from './etvpackage/etvpackage.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent, children: [
      { path: '', component: MainComponent },
      { path: 'main', component:  MainComponent},
      // { path: 'pricing', component:  PricingComponent},
      { path: 'product', component:  ProductsComponent},
      { path: 'service', component:  ServicesComponent},
      { path: 'about', component:  AboutComponent},
      { path: 'contact', component:  ContactComponent},
      { path: 'zeepackage', component:  ZeepackageComponent},
      { path: 'starpackage', component:  StarpackageComponent},
      { path: 'sonypackage', component:  SonypackageComponent},
      { path: 'colorspackage', component:  ColorspackageComponent},
      { path: 'sunpackage', component:  SunpackageComponent},
      { path: 'etvpackage', component:  EtvpackageComponent},



















    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
