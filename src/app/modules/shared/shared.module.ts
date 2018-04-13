import { NgModule } from "@angular/core";
import { HttpService, HeaderComponent, CookieService, CookieOptions } from "./index";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [HttpService, { provide: CookieOptions, useValue: {} },CookieService]
})
export class SharedModule {
}
