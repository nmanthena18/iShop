import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cartItem: Observable<any> =  this.obsArray.asObservable();
  totalObs: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  totalItem: Observable<any> =  this.totalObs.asObservable();
  constructor() { }

  addtocart(item) {
    let ext;
    this.cartItem.pipe(take(1)).subscribe(val => {
      ext = val.find(x => x.id === item.id);
    });
    if (ext) {
      item.qty += 1;
      item.price = item.qty * item.albumId;
    } else {
      item.qty = 1;
      item.price = item.albumId;
      this.addToSubject(item);
    }
  }

  removeAll() {
    this.cartItem.pipe(take(1)).subscribe(val => {
      const newArr = [];
      this.obsArray.next(newArr);
    });
  }

  getAllProducts() {
      return this.cartItem;
  }

  addOne (id) {
    this.cartItem.pipe(take(1)).subscribe(val => {
    let newVal = val.map((o, i) => {
      if (o.id === id) {
        o.qty += 1;
        o.price = o.qty * o.albumId;
      }
      return o;
    });
    this.obsArray.next(newVal);
  });
  }

  removeOne(id, index) {
    this.cartItem.pipe(take(1)).subscribe(val => {
      const newArr = val.map((o, i) => {
        if (o.id === id && o.qty > 0) {
          o.qty = o.qty - 1;
          o.price = o.qty * o.albumId;
        }
        return o;
      });
      this.obsArray.next(newArr);
      if (val[index].qty === 0) {
          val.splice(index, 1);
          this.obsArray.next(val);
      }
    });
  }

  addToSubject(item) {
    this.cartItem.pipe(take(1)).subscribe(val => {
      const newArr = [...val, item];
      this.obsArray.next(newArr);
    });
  }
  removeItem(index) {
    this.cartItem.pipe(take(1)).subscribe(val => {
      val.splice(index, 1);
      this.obsArray.next(val);
    });
  }

  getTotal() {
    let totalPrice = 0;
    let totalItems = 0;
    this.totalItem.subscribe( val => {
      val.map((o, i) => {
        totalPrice += o.price;
        totalItems = i;
      });
      this.totalObs.next([{totalPrice, totalItems}]);
    });
    return {totalPrice, totalItems};
  }
}
