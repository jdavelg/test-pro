import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  public product: Producto;
  public status: string;
  public products: Producto[];
  public location: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,

  ) {

  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._productService.getProduct(id).subscribe(
        response => {
          if (response.id) {
            this.product = response;
            this.status = "success"
          } else {
            this.status = "error"
          }

        },
        error => {
          this.status = "error"
        }
      )
    })
  }

}
