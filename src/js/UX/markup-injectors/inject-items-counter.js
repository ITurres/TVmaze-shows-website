// Updates the number of shows displayed in the homepage counter.

const amountOfShows = (counter) => {
  // Check if the counter is a number.
  if (!Number.isFinite(counter)) {
    throw new Error('The counter must be a number.');
  }

  // Check if the counter is negative.
  if (counter < 0) {
    throw new Error('The counter cannot be negative.');
  }

  const spanCounterElement = document.querySelector('#showsCounter');
  spanCounterElement.textContent = counter;
};

export default amountOfShows;