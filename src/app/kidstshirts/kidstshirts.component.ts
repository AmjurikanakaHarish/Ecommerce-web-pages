import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kidstshirts',
  templateUrl: './kidstshirts.component.html',
  styleUrls: ['./kidstshirts.component.css']
})
export class KidstshirtsComponent {
constructor(private router:Router){

}
onclick(){
  this.router.navigate(['/orderpage']);
}
inclick(){
  this.router.navigate(['/orderpage']);
}
click(){
  this.router.navigate(['/orderpage']);
}
}


