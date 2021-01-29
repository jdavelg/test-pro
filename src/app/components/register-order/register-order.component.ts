import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Orden } from 'src/app/models/orden';
import { ClientService } from 'src/app/services/client.service';
import { OrderService } from 'src/app/services/order.service';
import { Producto } from '../../models/producto';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css'],
  providers: [
    ProductService,
    OrderService,
    ClientService
  ]
})
export class RegisterOrderComponent implements OnInit {

  public products: Producto[];
  public order: Orden;
  public status: string;
  public clients: Client[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    private _orderService: OrderService,
    private _clientService: ClientService,
  ) {
    this.order = new Orden(null, null, null, null, '')
  }

  ngOnInit(): void {
    this.getClients();
    this.getProducts();
  }

  getProducts() {
    this._productService.getAllProducts().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.products = response;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  getClients() {
    this._clientService.getAllClients().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.clients = response;
        }
      },
      error => {
        this.status = "error2"
      }
    )
  }

  onSubmit(form) {

    this._orderService.register(this.order).subscribe(
      response => {
        if (response) {
          console.log(response);

          if (response.id) {
            this.status = "success"
            form.reset();

          } else {
            this.status = "error"
          }
        }
      },
      error => {
        console.log(error);
        this.status = "error"
      }
    )
    console.log(this.status);
  }

}
