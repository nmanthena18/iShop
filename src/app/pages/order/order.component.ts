import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/cart.service';

@Component({
  selector: 'ishop-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    private cartSer: CartService
  ) { }

  ngOnInit() {
    this.removeAll();
  }

  removeAll() {
    this.cartSer.removeAll();
  }

}
