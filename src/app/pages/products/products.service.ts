import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  public getProducts(url: string): Observable<any> {
    return this.get(url);
  }

}
