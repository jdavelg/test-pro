import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Producto } from '../../models/producto';

import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  providers:[ProductService]
})
export class RegisterProductComponent implements OnInit {
 
  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required)
  })
  public product:Producto;
  public status:string;
  
    constructor(
      private _route:ActivatedRoute,
      private _router:Router,
      private _productService:ProductService
    ) { 
      this.product=new Producto(null,'','',null)
    }

  ngOnInit(): void {
  }


  onSubmit(form){

    this._productService.register(this.product).subscribe(
      response=>{
if (response) {
  console.log(response);
  
  if (response.id) {
    this.status="success"
    form.reset();
    
  }else{
    this.status="error"
  }
  
  
}
      },
      error=>{
        console.log(error);
        this.status="error"
      }
    )
    console.log(this.status);





  }

}
