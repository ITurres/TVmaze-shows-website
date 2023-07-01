// get the data from the TV maze API
import tvMazeAPIBaseURl from './tvmaze-API.js';

const getAllShowsData = async (callback) => {
  try {
    const response = await fetch(tvMazeAPIBaseURl);
    const showsData = await response.json();
    return callback(showsData.slice(0, 42));
  } catch (error) {
    return error;
  }
};

export default getAllShowsData;
