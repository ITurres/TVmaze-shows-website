/**
 * @jest-environment jsdom
 */

//! comments with '?' have been added for learning purposes

import commentsCounter from '../../utils/comments-counter.js';

describe('Comments counter', () => {
  test('Should return correct count of comments', () => {
    // ?Mock the commentsContainer element
    const commentsContainer = {
      querySelectorAll: jest.fn().mockReturnValueOnce([
        document.createElement('div'), // ?Mock comment 1 and so forth
        document.createElement('div'),
        document.createElement('div')
      ])
    };

    // ?Call the function with the mock commentsContainer
    const comments = commentsCounter(commentsContainer);

    expect(comments).toBe(3);

    // ?Assert that the querySelectorAll function was called with the correct selector
    expect(commentsContainer.querySelectorAll).toHaveBeenCalledWith('.comment');
  });

  test('Should return 0 when there are no comments', () => {
    const commentsContainer = {
      querySelectorAll: jest.fn().mockReturnValueOnce([])
    };

    const comments = commentsCounter(commentsContainer);

    expect(comments).toBe(0);
    expect(commentsContainer.querySelectorAll).toHaveBeenCalledWith('.comment');
  });

  test('Should throw an error when commentsContainer is invalid', () => {
    const commentsContainer = null;

    expect(() => {
      commentsCounter(commentsContainer);
    }).toThrow('Invalid comments container');
  });

  test('Should throw an error when querySelectorAll is not a function', () => {
    const commentsContainer = {
      querySelectorAll: 'invalid'
    };

    expect(() => {
      commentsCounter(commentsContainer);
    }).toThrow('Invalid comments container');
  });
});
