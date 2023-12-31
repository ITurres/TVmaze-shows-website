import involvementAPI from './involvement-API.js';

const getComments = async (showId) => {
  try {
    const response = await fetch(
      `${involvementAPI.baseUrl}${involvementAPI.appId}/comments?item_id=${showId}`,
      {
        method: 'GET'
      }
    );

    const comments = await response.json();

    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

export default getComments;
