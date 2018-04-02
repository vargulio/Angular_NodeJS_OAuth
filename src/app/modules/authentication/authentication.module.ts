import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { GoogleRedirectHandler } from "./components/google-redirect-handler/google-redirect-handler";

@NgModule({
  imports: [AuthenticationRoutingModule],
  declarations: [
    LoginComponent,
    GoogleRedirectHandler
  ],
  exports: [],
  providers: []
})
export class AuthenticationModule {

}
