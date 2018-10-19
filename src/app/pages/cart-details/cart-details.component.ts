import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/cart.service';

@Component({
  selector: 'ishop-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  public cartItems = [];
  constructor(
    private cartSer: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartSer.getAllProducts();
  }

}


export class ProductType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
