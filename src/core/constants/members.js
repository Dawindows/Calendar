import { User } from '../modals/user';
import { Admin } from '../modals/admin';
// import { getDataFromServer } from '../server/api';

export const USERS = [
  new User('Maria'),
  new User('Alex'),
  new User('Regina'),
];

export const ADMINS = [
  new Admin('David'),
];

// function createNewMember(name, isAdmin) {
//   return (isAdmin ? new Admin(name) : new User(name));
// }

// export async function getMember() {
//   const members = await getDataFromServer('user');
//   const data = members.map((element) => {
//     return createNewMember(element.name, element.isAdmin);
//   });

//   return data;
// }
