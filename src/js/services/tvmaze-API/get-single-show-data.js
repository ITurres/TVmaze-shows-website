import urlAPI from './endpointTvmazeAPI.js';

const getSingleShowData = async (showId) => {
  const showData = await fetch(`${urlAPI}/${showId}`)
    .then((response) => response.json())
    .catch((error) => console.error(new Error(error)));

  return showData;
};

export default getSingleShowData;
