import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Client } from '../../models/client';

import { ClientService } from '../../services/client.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
  providers:[ClientService]
})
export class RegisterClientComponent implements OnInit {
  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required)
  })
  public client:Client;
public status:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _clientService:ClientService,
   
  ) { 
    this.client=new Client(null,'','');
   
  }
  


  ngOnInit(): void {
  }

  onSubmit(form,formDirective){

    this._clientService.register(form).subscribe(
      response=>{
if (response) {
  console.log(response);
  
  if (response.id) {
    this.status="success"
    formDirective.reset();
    
  }else{
    this.status="error";
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
