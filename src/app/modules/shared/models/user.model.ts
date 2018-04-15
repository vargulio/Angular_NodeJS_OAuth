export class User {

  public userName: string;
  public id: string;

  constructor(
    userName: string = null,
    id: string = null
  ) {
    this.userName = userName;
    this.id = id;
  }
}