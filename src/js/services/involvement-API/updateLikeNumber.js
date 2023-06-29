import getLikesData from './getLikes.js';

// Function to update the amount of likes for a specific show  ---------------------------------
const updateLikeNumber = async (showID) => {
  const likesData = await getLikesData();
  const item = likesData.find((item) => item.item_id === showID);
  const likes = item ? item.likes : 0;
  return likes;
};

export default updateLikeNumber;