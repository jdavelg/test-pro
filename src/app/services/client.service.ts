import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from "../models/client";
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
public url:string;

  constructor(
    public _http:HttpClient
   
  ) {
    this.url=global.url
   }

   test(){
     return "hola mundo from service"
   }
   register(client):Observable<any>{
     /* convertir objeto a json string */
let params= JSON.stringify(client);


/* definir cabeceras */
let headers= new HttpHeaders().set('Content-Type','application/json');

/* hacer peticion ajax */
return this._http.post(this.url+'clientes',params, {headers:headers});
   }

   getAllClients():Observable<any>{
    
  /* hacer peticion ajax */
return this._http.get(this.url+'clientes');
  
  }

  getClient(id):Observable<any>{

    return this._http.get(this.url+'clientes/'+id)
  }
}
