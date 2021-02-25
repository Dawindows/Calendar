export class User {
  constructor(name) {
    this.name = name;
    this._isAdmin = false;
  }

  get isAdmin() {
    return this._isAdmin;
  }
}
