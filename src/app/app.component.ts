import { Component } from '@angular/core';
import { AuthenticationService } from "./modules/shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
    this.authService.checkForExistingCookie();
  }
}
