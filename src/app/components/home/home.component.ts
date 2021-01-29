import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
public location:any;
  constructor(
    public _router:Router
  ) { }

  ngOnInit(): void {
    this.location = this._router.url;
  }
  ngDoCheck(): void {
    this.location = this._router.url
  }

}
