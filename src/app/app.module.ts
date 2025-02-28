import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
 import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardsComponent } from './cards/cards.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { HttpClientModule} from '@angular/common/http';
import { WomensComponent } from './womens/womens.component';
import { KidstshirtsComponent } from './kidstshirts/kidstshirts.component';
import { KidsjacketsComponent } from './kidsjackets/kidsjackets.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ProductComponent } from './product/product.component';
import { GirlswearComponent } from './girlswear/girlswear.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
     
    WelcomeComponent,
    PagenotfoundComponent,
    CardsComponent,
    KidsComponent,
    MensComponent,
    WomensComponent,
    KidstshirtsComponent,
    KidsjacketsComponent,
    OrderpageComponent,
    ProductComponent,
    GirlswearComponent,
    LoginpageComponent,
    RegisterComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
