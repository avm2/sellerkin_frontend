// services/api.js

import axios from 'axios';

const BASE_URL = 'https://sellerkin-backend-demo.onrender.com/api'; // Update with your backend URL

const fetchListings = async () => {
  const response = await axios.get(`${BASE_URL}/listings`);
  return response.data;
};

const updateLikes = async (listingId, likes) => {
  const response = await axios.put(`${BASE_URL}/listings/${listingId}/update-likes`, { likes });
  return response.data;
};

export { fetchListings, updateLikes };
