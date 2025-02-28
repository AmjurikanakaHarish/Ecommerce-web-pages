import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidstshirtsComponent } from './kidstshirts/kidstshirts.component';
import { KidsjacketsComponent } from './kidsjackets/kidsjackets.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { GirlswearComponent } from './girlswear/girlswear.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'kids',component:KidsComponent},
  {path:'mens',component:MensComponent},
  {path:'womens',component:WomensComponent},
  {path:'kidstshirts',component:KidstshirtsComponent},
  {path:'kidsjackets',component:KidsjacketsComponent},
  {path:'orderpage',component:OrderpageComponent},
  
  {path:'girlswear',component:GirlswearComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
