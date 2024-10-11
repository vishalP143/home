// src/components/RoomDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL;

const RoomDetail = () => {
  const { id } = useParams();  // Room ID from the URL
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);  // State for storing the room data
  const [showNotification, setShowNotification] = useState(null);  // State for notifications
  const [isLoading, setIsLoading] = useState(true);  // Loading state

  // Fetch room details when the component mounts
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);  // API call to fetch room data
        setRoom(response.data);  // Set room data in state
        setIsLoading(false);  // Stop loading
      } catch (error) {
        console.error('Error fetching room:', error);
        setShowNotification({ type: 'error', text: 'Failed to load room details.' });
        setIsLoading(false);  // Stop loading even if there's an error
      }
    };

    fetchRoom();
  }, [id]);

  // Handle room deletion
  const deleteRoom = async () => {
    try {
      await axios.delete(`${API_URL}/${id}`);  // API call to delete the room
      setShowNotification({ type: 'success', text: 'Room deleted successfully!' });
      setTimeout(() => navigate('/'), 2000);  // Navigate to home after 2 seconds
    } catch (error) {
      console.error('Error deleting room:', error);
      setShowNotification({ type: 'error', text: 'Failed to delete room.' });
    }
  };

  // Close the notification
  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  // If the page is still loading, show a loading message
  if (isLoading) return <div className="box-container">Loading...</div>;

  // If no room data was found, show an error message
  if (!room) return <div className="box-container">No room details available.</div>;

  return (
    <div className="box-container">
      <h1>{room.name}</h1>
      <div className="room-info">
        <p>Max Capacity: {room.maxcount}</p>
        <p>Rent per Day: ${room.rentperday}</p>
        <p>Type: {room.type}</p>
        <p>Description: {room.description}</p>
        <p>Location: {room.location}</p>
        <p>Contact Phone: {room.phonenumber}</p>
        {/* Safeguard in case features are not provided */}
        <p>Features: {room.features ? room.features.join(', ') : 'No features listed'}</p>
      </div>
      <div className="room-actions">
        <Link to={`/rooms/${room.id}/edit`} className="btn btn-update">Edit</Link>
        <button onClick={deleteRoom} className="btn btn-delete">Delete</button>
        <Link to="/" className="btn btn-back">Back to Home</Link>
      </div>
      {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default RoomDetail;
