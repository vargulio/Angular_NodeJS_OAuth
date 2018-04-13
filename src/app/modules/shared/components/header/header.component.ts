import { Component } from "@angular/core";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  printCookie() {
    console.log(document.cookie);
  }
}