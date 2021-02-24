import { User } from './user';

export class Admin extends User {
  constructor(name) {
    super(name);
    this._isAdmin = true;
  }
}
