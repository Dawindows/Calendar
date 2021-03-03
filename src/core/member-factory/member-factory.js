import { User } from '../modals/user';
import { Admin } from '../modals/admin';

class MemberFactory {
  static list = {
    false : User,
    true: Admin,
  }

  create(name, type) {
    const MemberShip = MemberFactory.list[type];
    const member = new MemberShip(name);
    member.type = type;
    member.define = function() {
      return (`${this.name} ${this.type}`);
    }
    return member;
  }
}

export const factory = new MemberFactory();
