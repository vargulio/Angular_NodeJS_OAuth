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
    private authService: AuthenticationService
  ) {
    /* Here we subscribe to change in the user, so we can update the header acordingly. */
    this.userDataService.userChangeObservable.subscribe(updatedUser => {
      this.user = updatedUser;
    })
  }

  public logoutUser(): void {
    this.authService.logout();
  }
}