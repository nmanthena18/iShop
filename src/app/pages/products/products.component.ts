import { Component, OnInit, HostListener } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'ishop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[];
  private counter = 1;
  constructor(
    private api: ProductsService
  ) { }

  ngOnInit() {
    this.api.get('https://jsonplaceholder.typicode.com/photos?albumId=1').subscribe(res => {
      this.products = res;
    })
  }
  
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  var element = document.documentElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight)
    {
      this.api.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.counter+1}`).subscribe(res => {
       this.products.push(...res);
      });
    }
  }
}

export class ProductType {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
