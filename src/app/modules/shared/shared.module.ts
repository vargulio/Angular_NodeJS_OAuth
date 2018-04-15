import { NgModule } from "@angular/core";
import { HttpService, HeaderComponent, CookieService,UserDataService, CookieOptions, AuthenticationService } from "./index";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [HttpService,UserDataService, AuthenticationService, {provide: CookieOptions, useValue: {}}, CookieService]
})
export class SharedModule {
}
