import { Component } from "@angular/core";
import { UserDataService, AuthenticationService } from "../../index";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: any = null;

  constructor(
    private userDataService: UserDataService,
  private authService: AuthenticationService) {
    this.userDataService.userChangeObservable.subscribe(updatedUser => {
      this.user = updatedUser;
      console.log(this.user);
    })
  }

  printCookie() {
    console.log(document.cookie);
  }

  logoutUser(){
    this.authService.logout();
  }
}