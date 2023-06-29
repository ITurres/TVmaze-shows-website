/**
 * @jest-environment jsdom
 */

import amountOfShows from '../UX/markup-injectors/inject-items-counter.js';

describe('amountOfShows', () => {
  test('should return the counter value if the counter is a number', () => {
    // Arrange
    document.body.innerHTML = '<li class="list-group-item active ms-3">Shows (<span id="showsCounter"></span>)</li>';
    const counter = 23;

    // Act
    amountOfShows(counter);

    // Assert
    expect(document.querySelector('#showsCounter').textContent).toBe('23');
  });

  test('should throw an error if the counter is not a number', () => {
    // Arrange
    const counter = '10';

    // Act & Assert
    expect(() => {
      amountOfShows(counter);
    }).toThrow(new Error('The counter must be a number.'));
  });

  test('should throw an error if the counter is negative', () => {
    // Arrange
    const counter = -10;

    // Act & Assert
    expect(() => {
      amountOfShows(counter);
    }).toThrow(new Error('The counter cannot be negative.'));
  });
});
