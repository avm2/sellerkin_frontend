// components/Listings.js
import React, { useState, useEffect } from 'react';
import { fetchListings, updateLikes } from '../services/api';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings();
      setListings(data);
    };

    loadListings();
  }, []);

  const handleLike = async (listingId) => {
    try {
      const updatedLikes = listings.find((listing) => listing._id === listingId).likes + 1;

      await updateLikes(listingId, updatedLikes);

      setListings((prevListings) =>
        prevListings.map((listing) =>
          listing._id === listingId ? { ...listing, likes: updatedLikes } : listing
        )
      );
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredListings = listings.filter((listing) =>
    listing.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Listings</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <ul>
        {filteredListings.map((listing) => (
          <li key={listing._id} className="mb-4">
            <h3 className="text-xl font-semibold">{listing.productName}</h3>
            <p className="text-gray-700">{listing.description}</p>
            <p className="text-gray-600">Likes: {listing.likes}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => handleLike(listing._id)}
            >
              Like
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
