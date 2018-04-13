import { Component } from '@angular/core';
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cookieService: CookieService) {
    console.log(this.cookieService.get('biscuit'));
  }
}
