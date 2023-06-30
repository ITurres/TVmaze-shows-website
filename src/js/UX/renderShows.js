// API elements ------------------------------------------------------------------------------------
import getAllShowsData from '../services/tvmaze-API/getAllShowsData.js';
import getLikesData from '../services/involvement-API/getLikes.js';

// Home page ---------------------------------------------------------------------------------------
import likeEvent from '../user-controller/user-likes-events.js';
import modalEvents from '../user-controller/user-comment-events.js';
import amountOfShows from './markup-injectors/inject-items-counter.js';

const renderShows = async (listOfShows) => {
  const likesData = await getLikesData();
  let likes = 0;
  let showCards = '';
  let counter = 0;

  listOfShows.forEach((show) => {
    const item = likesData.find(
      (item) => parseInt(item.item_id, 10) === show.id
    );
    likes = item ? item.likes : '';
    showCards += `
        <div class="card m-2 shadow mb-5 rounded" >
          <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
          <div class="card-body align-self-center">
            <button type="button" class="btn btn-sm btn-danger" data-set="${show.id}">
              <i class="fa-regular fa-heart"> ${likes}</i>
            </button>
            <button type="button" class="btn btn-sm btn-primary" id="${show.id}" 
              data-toggle="modal" data-target="#showsModal" data-show-modal-btn>
              Comments
            </button>
          </div>
        </div>
    `;
    counter += 1;
  });
  // Insert the cards into the show list
  const showsContainer = document.getElementById('shows-holder');
  showsContainer.innerHTML = showCards;
  // Add event listeners to the like buttons
  likeEvent();
  // To update the total number of shows in the navbar
  amountOfShows(counter);
};

getAllShowsData(renderShows).then(() => modalEvents());
