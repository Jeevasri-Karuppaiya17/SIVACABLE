import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ZeepackageComponent } from './zeepackage/zeepackage.component';
import { StarpackageComponent } from './starpackage/starpackage.component';
import { SonypackageComponent } from './sonypackage/sonypackage.component';
import { ColorspackageComponent } from './colorspackage/colorspackage.component';
import { SunpackageComponent } from './sunpackage/sunpackage.component';
import { EtvpackageComponent } from './etvpackage/etvpackage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    PricingComponent,
    ProductsComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ZeepackageComponent,
    StarpackageComponent,
    SonypackageComponent,
    ColorspackageComponent,
    SunpackageComponent,
    EtvpackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
