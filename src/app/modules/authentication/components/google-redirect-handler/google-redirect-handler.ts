import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../../shared/services/http.service";

@Component({
  templateUrl: './google-redirect-handler.html'
})
export class GoogleRedirectHandler {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot);
    this.httpService.get(`login?${this.activatedRoute.snapshot.fragment}`).toPromise().then(data => {
      console.log(data);
    })
  }

  hitProfileOnServer() {
    this.httpService.get('profile').toPromise().then(data => {
      console.log(data);
    }).catch(error => {
      console.log('HERE: ', error);
    })
  }

  logout() {
    this.httpService.get('logout').toPromise().then(data => {
      this.deleteAllCookies();
    }).catch(error => {
      console.log('HERE: ', error);
    })
  }


  private deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}