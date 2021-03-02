import { Notification } from '../../notification/notification';

const url = 'http://158.101.166.74:8080/api/data/david_sokur';

export const getData = async (entityName) => {
  try {
    const response = await fetch(`${url}/${entityName}`);
    const content = await response.json();
    if (content) {
      return content.map((item) => {
        const dataItem = JSON.parse(item.data);
        return dataItem;
      });
    }
  } catch (err) {
    const notification = new Notification(
      document.querySelector('#header'),
      err,
      false,
      10000,
    );
    notification.render();
  }
};
