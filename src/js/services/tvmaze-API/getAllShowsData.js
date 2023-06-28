// get the data from the TV maze API
import urlAPI from './endpointTvmazeAPI.js';

const getAllShowsData = async (callback) => {
  try {
    const request = new Request(urlAPI);
    const response = await fetch(request);
    const showsData = await response.json();
    return callback(showsData);
  } catch (error) {
    return error;
  }
};

export default getAllShowsData;