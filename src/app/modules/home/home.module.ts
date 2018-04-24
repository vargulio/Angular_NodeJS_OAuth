import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
