import { serverService } from '../service/server.service';

describe('Server Test', () => {
  it('should fetch all posts', async () => {
    const response = await serverService.getDataFromServer('events');
    expect(response.status).toEqual(200);
  });
});
