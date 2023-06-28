// API elements ------------------------------------------------------------------------------------
import { urlInvolvementAPI, idurlInvolvementAPI } from '../services/involvement-API/endpointInvolvementAPI.js';
import getAllShowsData from '../services/tvmaze-API/getAllShowsData.js';

// Home page ---------------------------------------------------------------------------------------
const renderShows = async (listOfShows) => {
  let showCards = '';
  listOfShows.forEach((show) => {
    showCards += `
        <div class="card m-2 shadow mb-5 rounded position-relative" style="width: 12rem;">
          <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
          <div class="card-body position-absolute bottom-0 end-0">
            <button type="button" class="btn btn-sm btn-danger" data-set="${show.id}">
              <i class="fa-regular fa-heart"> 4</i>
            </button>
            <button type="button" class="btn btn-sm btn-primary" id="${show.id}" data-toggle="modal" data-target="#showsModal" data-show-modal-btn>
              Comments
            </button>
          </div>
        </div>
    `;
  });

  const showsContainer = document.querySelector('.shows-container');
  showsContainer.innerHTML = showCards;
};

getAllShowsData(renderShows);
