import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Client } from '../../models/client';
import { Location } from '@angular/common';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  providers:[ClientService]
})
export class ClientDetailComponent implements OnInit {

  public client:Client;
public status:string;
public clients:Client[];
public location:any
constructor(
  private _route:ActivatedRoute,
  private _router:Router,
  private _clientService:ClientService,

) { 
  
}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._route.params.subscribe(params=>{
      let id= params['id'];
      this._clientService.getClient(id).subscribe(
        response=>{
          if (response.id) {
            this.client=response;
this.status="success"
          }else{
            this.status="error"
          }

        },
        error=>{
          this.status="error"
        }
      )
    })
  }

}
