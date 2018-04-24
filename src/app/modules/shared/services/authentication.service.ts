import { Injectable } from "@angular/core";
import { CookieService } from "angular2-cookie/core";
import { HttpService, UserDataService } from "../index";
import { Router } from "@angular/router";
import { Keys } from '../../../../config/keys';
import { API } from '../../../../config/api';

@Injectable()
export class AuthenticationService {

  public REDIRECT_AFTER_LOGIN = '/';

  constructor(
    private cookieService: CookieService,
    private httpService: HttpService,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  public googleLogin() {
    window.open(Keys.google.url + '?' +
      'scope=' + Keys.google.scope + '&' +
      'include_granted_scopes=true&' +
      'redirect_uri=' + Keys.google.redirectUrl + '&' +
      'response_type=' + Keys.google.responseType + '&' +
      'client_id=' + Keys.google.clientId, '_self');
  }

  public logout(): void {
    this.httpService.get(API.requests.authenticate.LOGOUT).toPromise().then(data => {
      this.cookieService.remove(Keys.google.cookieKey);
      this.userDataService.setUser();
    }).catch(error => {
      console.log('HERE: ', error);
    });
  }

  public googleRedirectHandler(token): void {
    this.httpService.get(`${API.requests.authenticate.LOGIN}?${token}`).toPromise().then(data => {
      this.userDataService.setUser(data);
      this.router.navigate([this.REDIRECT_AFTER_LOGIN]);
    }).catch(error => {
      console.error('Login was not successful');
    })
  }

  public checkForExistingCookie(): void {
    let existingCookie = this.cookieService.get(Keys.google.cookieKey);
    if (existingCookie) {
      this.httpService.get(API.requests.profile.GET_PROFILE).toPromise().then(data => {
        this.userDataService.setUser(data);
      }).catch(error => {
        console.log('HERE: ', error);
      })
    }
  }
}