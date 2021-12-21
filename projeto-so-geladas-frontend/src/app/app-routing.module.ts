import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'cart-page', component: CartPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: 'products-page', component: ProductsPageComponent },
  { path: 'sign-in-page', component: SignInPageComponent },
  { path: 'sign-up-page', component: SignUpPageComponent},
  { path: '', redirectTo: 'main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
