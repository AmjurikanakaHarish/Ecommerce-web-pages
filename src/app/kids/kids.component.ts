import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  constructor(private router: Router) {

  }
  onclick() {
    this.router.navigate(['/kidstshirts']);
  }
  inclick(){
    this.router.navigate(['/girlswear']);
 
}
}
