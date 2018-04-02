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

}