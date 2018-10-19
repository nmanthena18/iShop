import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public subject = new Subject<any>();
  public cartItems = [];
  constructor() { }

  addtocart(item) {
    console.log(item)
    this.cartItems.push(item);
  }

  removeAll() {
      this.cartItems = [];
  }

  getAllProducts() {
      return this.cartItems
  }

}
