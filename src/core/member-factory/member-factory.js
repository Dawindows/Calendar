import { User } from '../modals/user';
import { Admin } from '../modals/admin';

class MemberFactory {
  static list = {
    false: User,
    true: Admin,
  };

  create(name, type) {
    const MemberShip = MemberFactory.list[type];
    this.member = new MemberShip(name);
    this.member.type = type;
    this.member.define = function () {
      return `${this.name} ${this.type}`;
    };
    return this.member;
  }
}

export const factory = new MemberFactory();
