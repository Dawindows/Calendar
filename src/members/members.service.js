import { User } from './user';
import { Admin } from './admin';

const users = [
  new User('Maria'),
  new User('Alex'),
];

const admins = [
  new Admin('David'),
];

export const Members = [...admins, ...users];
