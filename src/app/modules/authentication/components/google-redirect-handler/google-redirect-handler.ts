import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService, HttpService } from "../../../shared";

@Component({
  template: ''
})
export class GoogleRedirectHandler {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authService.googleRedirectHandler(this.activatedRoute.snapshot.fragment);
  }

  hitProfileOnServer() {
    this.httpService.get('profile').toPromise().then(data => {
      console.log(data);
    }).catch(error => {
      console.log('HERE: ', error);
    })
  }

  logout() {
    this.authService.logout();
  }
}