// API elements ------------------------------------------------------------------------------------
import getAllShowsData from '../services/tvmaze-API/getAllShowsData.js';
import getLikesData from '../services/involvement-API/getLikes.js';

// Home page ---------------------------------------------------------------------------------------
import modalEvents from '../user-controller/user-comment-events.js';

const renderShows = async (listOfShows) => {
  const likesData = await getLikesData();
  let likes = 0;
  let showCards = '';
  listOfShows.forEach((show, index) => {
    const item = likesData.find((item) => item.item_id === index);
    likes = item ? item.likes : '';
    showCards += `
        <div class="card m-2 shadow mb-5 rounded position-relative" style="width: 12rem;">
          <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
          <div class="card-body position-absolute bottom-0 end-0">
            <button type="button" class="btn btn-sm btn-danger" data-set="${show.id}">
              <i class="fa-regular fa-heart"> ${likes}</i>
            </button>
            <button type="button" class="btn btn-sm btn-primary" id="${show.id}" data-toggle="modal" data-target="#showsModal" data-show-modal-btn>
              Comments
            </button>
          </div>
        </div>
    `;
  });
  // Insert the cards into the show list
  const showsContainer = document.querySelector('.shows-container');
  showsContainer.innerHTML = showCards;
};

getAllShowsData(renderShows).then(() => modalEvents());