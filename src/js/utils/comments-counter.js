const commentsCounter = (commentsContainer) => {
  const comments = commentsContainer.querySelectorAll('.comment').length;
  return comments;
};

export default commentsCounter;
