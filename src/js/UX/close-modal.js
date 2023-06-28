const closeModal = (modalHolder) => {
  document.querySelector('[data-close-modal]').addEventListener('click', () => {
    modalHolder.style.display = 'none';
  });
};

export default closeModal;
