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
  async getDataFromServer(entityName) {
    const response = await fetch(`${this.url}/${entityName}`);
    const content = await response.json();
    return content;
  }

  @errorDecorator
  async deleteDataOnServer(entityName, DataId) {
    await fetch(`${this.url}/${entityName}/${DataId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  @errorDecorator
  async createDataOnServer(entityName, newDataContent) {
    await fetch(`${this.url}/${entityName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: JSON.stringify(newDataContent) }),
    });
  }

  @errorDecorator
  async ChangeDataOnServer(entityName, changeDataContent, DataId) {
    await fetch(`${this.url}/${entityName}/${DataId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: changeDataContent }),
    });
  }
}

export const serverService = new ServerService(
  'http://158.101.166.74:8080/api/data/david_sokur'
);
