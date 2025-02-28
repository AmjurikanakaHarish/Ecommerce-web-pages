import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
constructor(private router: Router) {

  }
  onclick() {
    this.router.navigate(['/kidstshirts']);
  }
  inclick() {
    this.router.navigate(['/kidsjackets']);
  }
  click() {
    this.router.navigate(['/kidstshirts']);
  }
}
