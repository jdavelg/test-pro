import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Client } from '../../models/client';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
  providers:[ClientService]
})
export class RegisterClientComponent implements OnInit {

  public client:Client;
public status:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _clientService:ClientService
  ) { 
    this.client=new Client(null,'','')
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._clientService.register(this.client).subscribe(
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
