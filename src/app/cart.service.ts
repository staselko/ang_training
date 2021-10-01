import { Injectable, IterableDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = []
  time: Date = new Date()
  constructor(
    private http: HttpClient
    ) { }
  addToCart(product) {
    this.items.push(product);
    console.log('Added in', this.time)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  } 

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
