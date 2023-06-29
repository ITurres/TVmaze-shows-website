import involvementAPI from '../services/involvement-API/involvement-API.js';
import updateLikeNumber from '../services/involvement-API/updateLikeNumber.js';

// This section contains the like buttons functionality  --------------------------
const likeEvent = () => {
  const likeButtons = document.querySelectorAll('[data-set]');

  likeButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const showId = button.dataset.set;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: showId }),
        redirect: 'follow'
      };

      const response = await fetch(`${involvementAPI.baseUrl}${involvementAPI.appId}/likes/`, requestOptions);
      if (response.status === 201) {
        const newAmountOfLikes = await updateLikeNumber(showId);
        button.innerHTML = `<i class="fa-solid fa-heart"> ${newAmountOfLikes}</i>`;
      }
    });
  });
};

export default likeEvent;