import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { GoogleRedirectHandler } from "./components/google-redirect-handler/google-redirect-handler";
const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'redirect', component: GoogleRedirectHandler},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}