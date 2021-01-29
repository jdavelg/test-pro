import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
import { Location } from '@angular/common';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit, DoCheck {
  public client: Client;
  public status: string;
  public clients: Client[];
  public location: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _clientService: ClientService,

  ) {

  }

  ngDoCheck(): void {
    this.location = this._router.url;
    this.getClients();

  }

  ngOnInit(): void {
    this.getClients();
    this.location = this._router.url;

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

}
