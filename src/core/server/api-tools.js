const url = 'http://localhost:3000';

export const getDataFromServer = async (entityName) => {
  const response = await fetch(`${url}/${entityName}`);
  const content = await response.json();
  return content;
};

export const deleteDataOnServer = async (entityName, DataId) => {
  await fetch(`${url}/${entityName}/${DataId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const createDataOnServer = async (entityName, newDataContent) => {
  await fetch(`${url}/${entityName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDataContent),
  });
};

export const ChangeDataOnServer = async (entityName, changeDataContent, DataId) => {
  await fetch(`${url}/${entityName}/${DataId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changeDataContent),
  });
};
