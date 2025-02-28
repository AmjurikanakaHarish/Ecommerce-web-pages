import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-girlswear',
  templateUrl: './girlswear.component.html',
  styleUrls: ['./girlswear.component.css']
})
export class GirlswearComponent {
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
