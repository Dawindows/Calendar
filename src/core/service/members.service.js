import { USERS, ADMINS } from '../constants/members';

class MembersService {
  constructor() {
    this.admins = ADMINS;
    this.users = USERS;
  }

  getAllMembers() {
    return [...this.admins, ...this.users];
  }

  getUsers() {
    return [...this.users];
  }

  getAdmins() {
    return [...this.admins];
  }
}

export const membersService = new MembersService();
