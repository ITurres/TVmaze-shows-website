// Updates the number of shows displayed in the homepage counter.
const amountOfShows = (counter) => {
  const spanCounterElement = document.querySelector('#showsCounter');
  spanCounterElement.textContent = counter;
};

export default amountOfShows;