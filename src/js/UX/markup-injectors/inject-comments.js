import getComments from '../../services/involvement-API/get-comments.js';
import createComments from '../markup-templates/create-comments.js';

const injectComments = async (showId) => {
  try {
    const showComments = await getComments(showId);
    const commentsTemplate = createComments(showComments);
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = commentsTemplate;
    return commentsContainer;
  } catch (error) {
    return `Could not get comments ${error}`;
  }
};

export default injectComments;
