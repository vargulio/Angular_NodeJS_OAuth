import { Component } from '@angular/core';
import { HttpService } from "../shared";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private httpService: HttpService) {}

}
