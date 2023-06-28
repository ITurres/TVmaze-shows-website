import formatDate from '../../utils/format-date.js';

const createComments = (comments) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return 'Be the first to comment!';
  }

  const commentsHTMLtemplate = comments
    .map((comment) => {
      const dateFormatted = formatDate(comment.creation_date);
      return `
        <div class="comment">
            <p><span class="comment__date">${dateFormatted}</span> 
              ${comment.username}: ${comment.comment}</p>
        </div>
        `;
    })
    .join('');

  return commentsHTMLtemplate;
};

export default createComments;
