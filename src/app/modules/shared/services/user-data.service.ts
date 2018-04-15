import { Injectable } from "@angular/core";
import { User } from "../index";
import { Subject } from "rxjs/Rx";

@Injectable()
export class UserDataService {

  private currentLoggedUser: User = new User();

  public userChange: Subject<any> = new Subject<any>();
  public userChangeObservable = this.userChange.asObservable();

  constructor() {console.log("NOW CONSTRUCTING");}

  public setUser(userId: string = null, username = null): void {
    this.currentLoggedUser = new User(userId, username);
    this.userChange.next(this.currentLoggedUser);
    console.log('bahur', this.currentLoggedUser);
  }

  public getUser(): User {
    return this.currentLoggedUser;
  }

}