import involvementAPI from './involvement-API.js';

// Function to get the likes of each Show  -----------------------------------------------------
// eslint-disable-next-line consistent-return
const getLikesData = async () => {
  const response = await fetch(`${involvementAPI.baseUrl}${involvementAPI.appId}/likes/`, { method: 'GET' });
  const data = await response.json();
  if (JSON.stringify(response) !== '[]') {
    return data;
  }
  if (JSON.stringify(response) === '[]') {
    const data = [];
    return data;
  }
};

export default getLikesData;