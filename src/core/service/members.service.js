import { getMember } from '../member-factory/member-create';

class MembersService {
  getAllMembers() {
    return getMember().then((data) => data);
  }
}

export const membersService = new MembersService();
