import { Notification } from '../../notification/notification';

class ServerService {
  constructor() {
    this.url = 'http://158.101.166.74:8080/api/data/david_sokur';
  }

  async getDataFromServer(entityName) {
    try {
      const response = await fetch(`${this.url}/${entityName}`);
      const content = await response.json();
      return content;
    } catch (err) {
      const notification = new Notification(
        document.querySelector('#header'),
        err,
        false,
        10000,
      );
      notification.render();
    }
  }

  async deleteDataOnServer(entityName, DataId) {
    await fetch(`${this.url}/${entityName}/${DataId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

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

export const serverService = new ServerService();
