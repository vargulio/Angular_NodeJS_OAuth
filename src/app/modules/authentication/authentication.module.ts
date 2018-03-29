import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  imports: [AuthenticationRoutingModule],
  declarations: [LoginComponent],
  exports: [],
  providers: []
})
export class AuthenticationModule {

}
