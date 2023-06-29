import getSingleShowData from '../services/tvmaze-API/get-single-show-data.js';
import createShowModal from '../UX/markup-templates/create-show-modal.js';
import injectComments from '../UX/markup-injectors/inject-comments.js';
import closeModal from '../UX/close-modal.js';
import postComment from '../services/involvement-API/post-comment.js';

// ? 'comment' button event listener

const commentEvent = () => {
  document
    .querySelector('[data-comment-btn]')
    .addEventListener('click', async (button) => {
      const userName = document.querySelector('[name="userName"]');
      const userComment = document.querySelector('[name="comment"]');
      const showId = button.target.id;

      if (!userName.value || !userComment.value) {
        return;
      }

      await postComment({
        item_id: showId,
        username: userName.value,
        comment: userComment.value
      });

      const commentsContainer = document.getElementById('comments-container');
      await injectComments(showId, commentsContainer);

      userName.value = '';
      userComment.value = '';
    });
};

const modalEvents = () => {
  document.querySelectorAll('[data-show-modal-btn]').forEach((button) => {
    button.addEventListener('click', async () => {
      const modalHolder = document.querySelector('[data-modal-holder]');
      const showData = await getSingleShowData(button.id);
      modalHolder.innerHTML = createShowModal(showData);

      const commentsContainer = document.getElementById('comments-container');
      await injectComments(button.id, commentsContainer);

      commentEvent();

      closeModal(modalHolder);
    });
  });
};

export default modalEvents;
