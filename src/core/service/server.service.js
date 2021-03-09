import { errorDecorator } from '../error-decorator/error-decorator';

class ServerService {
  constructor(url) {
    if (typeof ServerService.instance === 'object') {
      return ServerService.instance;
    }
    ServerService.instance = this;
    this.url = url;
    return this;
  }

  @errorDecorator
  async get(entityName) {
    const response = await fetch(`${this.url}/${entityName}`);
    return response;
  }

  @errorDecorator
  async delete(entityName, DataId) {
    const response = await fetch(`${this.url}/${entityName}/${DataId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  }

  @errorDecorator
  async create(entityName, newDataContent) {
    const setScores = await fetch(`${this.url}/${entityName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: JSON.stringify(newDataContent) }),
    }).then((result) => result.json());
    return setScores;
  }

  @errorDecorator
  async update(entityName, changeDataContent, DataId) {
    const updateData = await fetch(`${this.url}/${entityName}/${DataId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: changeDataContent }),
    }).then((result) => result.json());
    return updateData;
  }
}

export const serverService = new ServerService(
  'http://158.101.166.74:8080/api/data/david_sokur'
);
