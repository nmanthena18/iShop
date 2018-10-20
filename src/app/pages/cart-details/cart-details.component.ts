import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/components/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ishop-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  public cartItems = [];
  private cartSubscription: Subscription;
  private detailSubscription: Subscription;
  details: any;
  constructor(
    private cartSer: CartService
  ) { }

  ngOnInit() {
    this.cartSubscription = this.cartSer.getAllProducts().subscribe(res => {
      this.cartItems = res;
    });
    this.getTotal();
  }
  addOne(id) {
    this.cartSer.addOne(id);
  }

  removeOne(id, index) {
    this.cartSer.removeOne(id, index);
  }
  removeItem(i) {
    this.cartSer.removeItem(i);
  }
  removeAll() {
    this.cartSer.removeAll();
  }

  getTotal() {
    this.cartSubscription = this.cartSer.getAllProducts().subscribe( val => {
      let totalPrice = 0;
      let totalItems = 1;
      val.map((o, i) => {
        totalPrice += o.price;
        totalItems = i;
      });
      this.details = {totalPrice, totalItems};
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}


export class ProductType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
