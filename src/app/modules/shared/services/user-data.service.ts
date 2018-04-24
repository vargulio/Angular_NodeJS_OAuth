import { Injectable } from "@angular/core";
import { User } from "../index";
import { Subject } from "rxjs/Rx";

@Injectable()
export class UserDataService {

  private currentLoggedUser: User = new User();

  public userChange: Subject<any> = new Subject<any>();
  public userChangeObservable = this.userChange.asObservable();

  public setUser(user: any = {}): void {
    this.currentLoggedUser = new User(user.username, user._id, user.image);
    this.userChange.next(this.currentLoggedUser);
  }

  public getUser(): User {
    return this.currentLoggedUser;
  }
}