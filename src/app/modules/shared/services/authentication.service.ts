import { Injectable } from "@angular/core";
import { CookieService } from "angular2-cookie/core";
import { HttpService, UserDataService } from "../index";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {

  constructor(
    private cookieService: CookieService,
    private httpService: HttpService,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  public googleLogin() {
    window.open('https://accounts.google.com/o/oauth2/v2/auth?' +
      'scope=profile&' +
      'include_granted_scopes=true&' +
      'redirect_uri=http://localhost:4200/auth/redirect&' +
      'response_type=token&' +
      'client_id=1019596094868-e9mcrqafvqsrg5hbatrgmmi84vfsvlpr.apps.googleusercontent.com', '_self');
  }

  public logout() {
    this.httpService.get('logout').toPromise().then(data => {
      this.cookieService.remove('biscuit');
      this.userDataService.setUser();
    }).catch(error => {
      console.log('HERE: ', error);
    });
  }

  public googleRedirectHandler(token) {
    this.httpService.get(`login?${token}`).toPromise().then(data => {
      console.log("Here", data);
      this.userDataService.setUser(data);
      this.router.navigate(['/']);
    }).catch(error => {
      console.error('Login was not successful');
    })
  }

  public checkForExistingCookie() {
    let existingCookie = this.cookieService.get('biscuit');
    if (existingCookie) {
      this.httpService.get('profile').toPromise().then(data => {
        console.log('biscuit', data);
        this.userDataService.setUser(data);
      }).catch(error => {
        console.log('HERE: ', error);
      })
    }
  }


}