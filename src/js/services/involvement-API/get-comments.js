import involvementAPI from './involvement-API.js';

const getComments = async (showId) => {
  const comments = await fetch(
    `${involvementAPI.baseUrl}${involvementAPI.appId}/comments?item_id=${showId}`
  ).then((response) => response.json());

  return comments;
};

export default getComments;
