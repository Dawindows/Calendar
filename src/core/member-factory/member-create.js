import { serverService } from '../service/server.service';
import { factory } from './member-factory';

export const getMember = async () => {
  const response = await serverService.get('members');
  const content = await response.json();

  const data = content.map((element) =>
    factory.create(
      JSON.parse(element.data).name,
      JSON.parse(element.data).isAdmin
    )
  );

  return data;
};
