import { getMember } from '../member-factory/member-create';

class MembersService {
  getAllMembers() {
    this.data = getMember().then((data) => data);
    return this.data;
  }
}

export const membersService = new MembersService();
