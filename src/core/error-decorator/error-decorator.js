import { Notification } from '../../notification/notification';

export const errorDecorator = (target, key, descriptor) => {
  const origina = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await origina.apply(this, args);
    } catch (err) {
      const notification = new Notification(
        document.querySelector('#header') || document.body,
        err,
        false,
        100000
      );
      notification.render();
    }
    return null;
  };
  return descriptor;
};
