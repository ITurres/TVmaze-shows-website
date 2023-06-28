const createShowModal = (show) => `
  <div id="show-info-modal" class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="show__title">${show.name}</h1>
        <button
          type="button"
          class="close close-modal"
          data-dismiss="modal"
          aria-label="Close"
          data-close-modal
        >
          <i class="fa-solid fa-xmark fa-beat"></i>
        </button>
      </div>
      <div class="modal-body d-flex gap-3">
        <img
          src="${show.image.medium}"
          alt="show preview"
          class="rounded"
        />
        <div class="p-2">
          <ul class="nav flex-column">
            <li class="show__info pb-2">
              <strong>&#11088;Premiered:</strong><span> ${show.premiered}</span>
            </li>
            <li class="show__info pb-2">
              <strong>&#127909;Genres:</strong><span> ${show.genres}</span>
            </li>
            <li class="show__info pb-2">
              <strong>&#127887;Language:</strong><span> ${show.language}</span>
            </li>
            <li class="show__info">
              <strong>&#128203;Type:</strong><span> ${show.type}</span>
            </li>
          </ul>
        </div>
      </div>
      <p class="show__summary p-3">${show.summary.replace(/<p>/, '').replace(/<\/p>/, '')}</p>
      <div class="align-self-center">
        <h2 class="text-center">Comments(<strong data-comments-counter></strong>)</h2>
        <div id="comments-container" 
          class="comments-container p-2"></div>
      </div>
    </div>
  </div>`;

export default createShowModal;
