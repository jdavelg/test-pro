import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public url: string;
  public

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url
  }
  register(order): Observable<any> {
    /* convertir objeto a json string */
    let params = JSON.stringify(order);

    /* definir cabeceras */
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    /* hacer peticion ajax */
    return this._http.post(this.url + 'ordenes', params, { headers: headers });
  }

  getAllOrders(): Observable<any> {

    /* hacer peticion ajax */
    return this._http.get(this.url + 'ordenes');

  }
}
