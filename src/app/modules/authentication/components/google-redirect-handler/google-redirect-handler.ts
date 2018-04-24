/*This component handles the call from the google api to the supplied
  redirect url, which we supplied in the initiating call to it. */

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService, HttpService } from "../../../shared";
import { API } from '../../../../../config/api';

@Component({
  template: ''
})
export class GoogleRedirectHandler {


  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private authService: AuthenticationService
  ) {}

  public ngOnInit(): void {
    this.authService.googleRedirectHandler(this.activatedRoute.snapshot.fragment);
  }

  hitProfileOnServer() {
    this.httpService.get(API.requests.profile.GET_PROFILE).toPromise().then(data => {
      console.log(data);
    }).catch(error => {
      console.log('HERE: ', error);
    })
  }

  logout() {
    this.authService.logout();
  }
}