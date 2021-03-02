import { User } from '../modals/user';
import { Admin } from '../modals/admin';
import { getData } from '../server/api-get-data';

function createNewMember(name, isAdmin) {
  return (isAdmin === 'true' ? new Admin(name) : new User(name));
}

export const getMember = async () => {
  const members = await getData('members');
  const data = members.map((element) => {
    return createNewMember(element.name, element.isAdmin);
  });

  return data;
};
