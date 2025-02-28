import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
constructor(private router:Router){

}
onclick(){
  this.router.navigate(['/kids']);
}
inclick(){
  this.router.navigate(['/mens']);
}
click(){
  this.router.navigate(['/womens']);
}
}
