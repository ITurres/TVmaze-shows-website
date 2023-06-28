import getComments from '../../services/involvement-API/get-comments.js';
import createComments from '../markup-templates/create-comments.js';

const injectComments = async (showId) => {
  const showComments = await getComments(showId);
  const commentsTemplate = createComments(showComments);
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = commentsTemplate;
  return commentsContainer;
};

export default injectComments;
