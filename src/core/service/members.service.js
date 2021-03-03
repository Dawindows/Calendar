import { getMember } from '../create-member/create-member';

class MembersService {
  getAllMembers() {
    return getMember().then((data) => data);
  }
}

export const membersService = new MembersService();
