import fetchMock from 'jest-fetch-mock';
import { serverService } from '../service/server.service';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('Server Test Get', () => {
  it('should get data', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ data: { eventName: 'first event' } })
    );

    const response = await serverService.getDataFromServer();
    const content = await response.json();

    expect(content).toEqual({ data: { eventName: 'first event' } });
    expect(response.status).toEqual(200);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('Server Test Post', () => {
  it('should post data', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ data: { eventName: 'first event' } })
    );

    const response = await serverService.createDataOnServer();

    expect(response).toEqual({ data: { eventName: 'first event' } });
    expect(fetch.mock.calls.length).toEqual(1);
  });
});

describe('Server Test Delete', () => {
  it('should delete data', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ id: 1, data: { eventName: 'first event' } }),
      { status: 204 }
    );

    const response = await serverService.deleteDataOnServer();

    expect(response.status).toEqual(204);
    expect(fetch.mock.calls.length).toEqual(1);
  });
});

describe('Server Test Put', () => {
  it('should put data', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ id: 12, data: { eventName: 'first event' } })
    );

    const response = await serverService.ChangeDataOnServer();

    expect(response).toEqual({ id: 12, data: { eventName: 'first event' } });
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
