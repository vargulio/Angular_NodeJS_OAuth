export class User {

  public userName: string;
  public id: string;
  public image: any;

  constructor(
    userName: string = null,
    id: string = null,
    image: any
  ) {
    this.userName = userName;
    this.id = id;
    this.image = image;
  }
}