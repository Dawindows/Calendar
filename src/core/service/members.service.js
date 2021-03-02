import { getMember } from '../constants/members';

class MembersService {
  getAllMembers() {
    return getMember().then((data) => data);
  }
}

export const membersService = new MembersService();
