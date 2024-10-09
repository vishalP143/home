// src/components/RoomDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

import '../styles/RoomDetail.css'; // Component-specific styles

const API_URL = process.env.REACT_APP_API_URL; // Ensure this points to your rooms API endpoint

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [showNotification, setShowNotification] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms/${id}`); // Adjust API endpoint for rooms
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room:', error);
        setShowNotification({ type: 'error', text: 'Error loading room details.' });
      }
    };
    fetchRoom();
  }, [id]);

  const deleteRoom = async () => {
    try {
      await axios.delete(`${API_URL}/rooms/${id}`); // Adjust API endpoint for rooms
      setShowNotification({ type: 'success', text: 'Room deleted successfully!' });
      setTimeout(() => navigate('/'), 3000); // Navigate after showing notification for 3 seconds
    } catch (error) {
      console.error('Error deleting room:', error);
      setShowNotification({ type: 'error', text: 'Error deleting room.' });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  if (!room) return <div className="box-container">Loading...</div>;

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
        <p>Features: {room.features.join(', ')}</p>
      </div>
      <div className="room-actions">
        <Link to={`/room/${room.id}/edit`} className="btn btn-update">Edit</Link>
        <button onClick={deleteRoom} className="btn btn-delete">Delete</button>
        <Link to="/" className="btn btn-back">Back to Home</Link>
      </div>
      {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default RoomDetail;