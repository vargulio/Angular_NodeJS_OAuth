import { Component } from "@angular/core";
import { HttpService } from "../../../shared";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private httpService: HttpService) {}


  public googleLogin() {
    window.open('https://accounts.google.com/o/oauth2/v2/auth?' +
      'scope=profile&' +
      'include_granted_scopes=true&' +
      'redirect_uri=http://localhost:4200/auth/redirect&' +
      'response_type=token&' +
      'client_id=1019596094868-e9mcrqafvqsrg5hbatrgmmi84vfsvlpr.apps.googleusercontent.com', '_self');
  }
}