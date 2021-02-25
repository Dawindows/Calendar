import { Users, Admins } from '../constants/members';

export const MembersUsers = [...Users];
export const MembersAdmins = [...Admins];
export const Members = [...Admins, ...Users];
