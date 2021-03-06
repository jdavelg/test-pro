import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProductComponent,
    OrderComponent,
    HomeComponent,
    RegisterClientComponent,
    RegisterProductComponent,
    RegisterOrderComponent,
    ErrorComponent,
    ClientDetailComponent,
    OrderDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
