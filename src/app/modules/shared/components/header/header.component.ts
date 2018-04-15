import { Component } from "@angular/core";
import { UserDataService, AuthenticationService } from "../../index";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isUserLoggedIn: boolean = false;


  constructor(
    private userDataService: UserDataService,
  private authService: AuthenticationService) {
    this.userDataService.userChangeObservable.subscribe(updatedUser => {
      this.isUserLoggedIn = !!updatedUser.id;
    })
  }

  printCookie() {
    console.log(document.cookie);
  }

  logoutUser(){
    this.authService.logout();
  }
}