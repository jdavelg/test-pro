import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from "../models/client";
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url:string;

  constructor(
    public _http:HttpClient
   
  ) {
    this.url=global.url
   }

   
}
