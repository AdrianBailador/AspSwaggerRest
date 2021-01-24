import { Component } from '@angular/core';
import { BeerService } from './api/services';
import {Beer} from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public beer: Beer;
  public constructor(private api: BeerService){
    this.beer = {};
    this.api.apiBeerGet$Json({Id: 1}).subscribe(res => {
      this.beer = res;
    });
  }
}
