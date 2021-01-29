import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Orden } from '../../models/orden';
import { Location } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [
    OrderService,
    ProductService,
    ClientService
  ]
})
export class OrderComponent implements OnInit {

  public orden: Orden;
  public status: string;
  public orders: Orden[];
  public location: any;
  public clients: Client[];
  public products: Producto[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService,
    private _clientService: ClientService,
    private _productService: ProductService
  ) {

  }

  ngDoCheck(): void {
    this.location = this._router.url;
  }

  ngOnInit(): void {
    this.getOrders();
    this.getClients();
    this.getProducts();
    console.log(this._router.url);
    this.location = this._router.url;

  }

  getProducts() {
    this._productService.getAllProducts().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.products = response;
          this.status = "success";
        } else {
          this.status = "error";
        }
      },
      error => {
        this.status = "error";
      }
    )
  }

  getClients() {
    this._clientService.getAllClients().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.clients = response;
          this.status = "success";
        } else {
          this.status = "error"
        }
      },
      error => {
        this.status = "error"
      }
    )
  }

  getOrders() {
    this._orderService.getAllOrders().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.orders = response;
          this.status = "success";
        } else {
          this.status = "error";
        }
      },
      error => {
        this.status = "error";
      }
    )
  }

}
