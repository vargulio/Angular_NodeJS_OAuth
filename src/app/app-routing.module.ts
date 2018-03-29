import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
const routes: Routes = [
  {path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule'},
  {path: 'login', loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}