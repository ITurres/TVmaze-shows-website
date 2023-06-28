import getSingleShowData from '../services/tvmaze-API/get-single-show-data.js';
import createShowModal from '../UX/markup-templates/create-show-modal.js';
import injectComments from '../UX/markup-injectors/inject-comments.js';
import closeModal from '../UX/close-modal.js';

// ? 'comment' button event listener

const modalEvents = () => {
  document.querySelectorAll('[data-show-modal-btn]').forEach((button) => {
    button.addEventListener('click', async () => {
      const modalHolder = document.querySelector('[data-modal-holder]');
      const showData = await getSingleShowData(button.id);
      modalHolder.innerHTML = createShowModal(showData);

      injectComments(showData.id);
      closeModal(modalHolder);
    });
  });
};

export default modalEvents;
