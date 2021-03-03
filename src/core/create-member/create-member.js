import { User } from '../modals/user';
import { Admin } from '../modals/admin';
import { serverService } from '../service/server.service';

function createNewMember(name, isAdmin) {
  return (isAdmin === 'true' ? new Admin(name) : new User(name));
}

export const getMember = async () => {
  const members = await serverService.getDataFromServer('members');
  const data = members.map((element) => createNewMember(JSON.parse(element.data).name, JSON.parse(element.data).isAdmin));
  return data;
};
