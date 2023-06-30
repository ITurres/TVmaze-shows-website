import tvMazeAPIBaseURl from './tvmaze-API.js';

const getSingleShowData = async (showId) => {
  const showData = await fetch(`${tvMazeAPIBaseURl}/${showId}`)
    .then((response) => response.json())
    .catch((error) => console.error(new Error(error)));

  return showData;
};

export default getSingleShowData;
