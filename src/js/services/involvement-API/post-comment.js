import involvementAPI from './involvement-API.js';

const postComment = async (comment) => {
  try {
    const response = await fetch(
      `${involvementAPI.baseUrl}${involvementAPI.appId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          item_id: comment.item_id,
          username: comment.username,
          comment: comment.comment,
          creation_date: new Date()
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to post comment');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default postComment;
