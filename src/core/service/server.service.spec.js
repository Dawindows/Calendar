import fetchMock from 'jest-fetch-mock';
import { serverService } from './server.service';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('Server test get', () => {
  it('get method should return object', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ data: { eventName: 'first event' } })
    );

    const response = await serverService.get();
    const content = await response.json();

    expect(content).toEqual({ data: { eventName: 'first event' } });
    expect(response.status).toEqual(200);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('returns null when exception', async () => {
    fetch.mockReject(() => Promise.reject(new Error('Error')));

    const response = await serverService.get();

    expect(response).toEqual(null);
  });
});

describe('Server test create', () => {
  it('create method should return object', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ data: { eventName: 'first event' } })
    );

    const response = await serverService.create();

    expect(response).toEqual({ data: { eventName: 'first event' } });
    expect(fetch.mock.calls.length).toEqual(1);
  });
});

describe('Server test delete', () => {
  it('delete method should return status 204', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ id: 1, data: { eventName: 'first event' } }),
      { status: 204 }
    );

    const response = await serverService.delete();

    expect(response.status).toEqual(204);
    expect(fetch.mock.calls.length).toEqual(1);
  });
});

describe('Server test update', () => {
  it('update method should return object', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ id: 12, data: { eventName: 'first event' } })
    );

    const response = await serverService.update();

    expect(response).toEqual({ id: 12, data: { eventName: 'first event' } });
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
