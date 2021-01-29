import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck {

  public product: Producto;
  public status: string;
  public products: Producto[];
  public location: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,

  ) {

  }

  ngDoCheck(): void {
    this.location = this._router.url;
    this.getProducts();

  }

  ngOnInit(): void {

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

}
