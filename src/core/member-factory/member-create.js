import { serverService } from '../service/server.service';
import { factory } from './member-factory'

export const getMember = async () => {
  const members = await serverService.getDataFromServer('members');
  const data = members.map((element) => factory.create(JSON.parse(element.data).name, JSON.parse(element.data).isAdmin));
  return data;
};
