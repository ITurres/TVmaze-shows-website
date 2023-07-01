import involvementAPI from './involvement-API.js';

// Function to get the likes of each Show  -----------------------------------------------------
const getLikesData = async () => {
  const response = await fetch(`${involvementAPI.baseUrl}${involvementAPI.appId}/likes/`, { method: 'GET' });
  const data = await response.json();
  return JSON.stringify(data) === '[]' ? [] : data;
};

export default getLikesData;