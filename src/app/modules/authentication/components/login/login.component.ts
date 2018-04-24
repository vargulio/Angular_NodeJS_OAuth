import { Component } from "@angular/core";
import { HttpService, AuthenticationService } from "../../../shared";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private httpService: HttpService,
    private authService: AuthenticationService
  ) {}

  public googleLogin(): void {
    this.authService.googleLogin();
  }
}