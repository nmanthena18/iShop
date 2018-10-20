import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'ishop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('item') item;

  constructor(
    private cartservice: CartService
  ) { }
  ngOnInit() {}

  addtocatHandler (item) {
    this.cartservice.addtocart(item);
  }
}
