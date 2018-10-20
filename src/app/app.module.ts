import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ProductsComponent } from './pages/products/products.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: '',  redirectTo: 'welcome', pathMatch: 'full', },
  { path: 'cart',  component: CartDetailsComponent },
  { path: 'order',  component: OrderComponent },
  ];


  const component = [ProductsComponent, ItemComponent, OrderComponent];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ...component,
    CartComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
