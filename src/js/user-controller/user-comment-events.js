import getSingleShowData from '../services/tvmaze-API/get-single-show-data.js';
import createShowModal from '../UX/markup-templates/create-show-modal.js';
import closeModal from '../UX/close-modal.js';

// ? 'comment' button event listener

const modalHolder = document.querySelector('[data-modal-holder]');

document.querySelectorAll('[data-show-modal-btn]').forEach((button) => {
  button.addEventListener('click', async () => {
    const showData = await getSingleShowData(button.id);
    modalHolder.innerHTML = createShowModal(showData);
    closeModal(modalHolder);
  });
});
