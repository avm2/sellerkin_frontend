import React, { useState } from 'react';
import { updateLikes } from '../services/api';

const ListingForm = ({ listing }) => {
  const [likes, setLikes] = useState(listing.likes);

  const handleLike = async () => {
    const updatedLikes = likes + 1;

    // Update likes on the backend
    await updateLikes(listing._id, updatedLikes);

    // Update the state to reflect the change
    setLikes(updatedLikes);
  };

  return (
    <div>
      <h2>{listing.productName}</h2>
      <p>{listing.description}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default ListingForm;
