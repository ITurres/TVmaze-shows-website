import involvementAPI from './involvement-API.js';

// Function to get the likes of each Show  -----------------------------------------------------
const getLikesData = async () => {
  const response = await fetch(`${involvementAPI.baseUrl}${involvementAPI.appId}/likes/`, { method: 'GET' });
  if (JSON.stringify(response) !== '{}') {
    const data = await response.json();
    return data;
  }
  if (JSON.stringify(response) === '{}') {
    const data = [];
    return data;
  }
};

export default getLikesData;