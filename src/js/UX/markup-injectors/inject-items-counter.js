// This part updates the total pokemon number in the nav.
const amountOfShows = (counter) => {
  const spanCounterElement = document.querySelector('#showsCounter');
  spanCounterElement.textContent = counter;
};

export default amountOfShows;