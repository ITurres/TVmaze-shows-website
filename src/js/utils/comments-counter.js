const validateCommentsContainer = (commentsContainer) => !commentsContainer || typeof commentsContainer.querySelectorAll !== 'function';

const commentsCounter = (commentsContainer) => {
  if (validateCommentsContainer(commentsContainer)) {
    throw new Error('Invalid comments container');
  }
  const comments = commentsContainer.querySelectorAll('.comment').length;
  return comments;
};

export default commentsCounter;
