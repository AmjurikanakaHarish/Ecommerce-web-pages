import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseurl="assets/cards.json";
  constructor(private http:HttpClient) { }
  getdetails():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)
  }
  private products: Cards[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1', src: 'https://via.placeholder.com/150' ,rating:5},
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2', src: 'https://via.placeholder.com/150' ,rating:5 },
    { id: 3, name: 'Product 3', price: 300, description: 'Description 3', src: 'https://via.placeholder.com/150' ,rating:5},
  ];

  getProducts(): Cards[] {
    return this.products;
  }

  getProductById(id: number): Cards | undefined {
    return this.products.find(product => product.id === id);
  }
}