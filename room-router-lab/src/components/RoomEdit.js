// src/components/RoomEdit.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/RoomEdit.css'; // Component-specific styles

const API_URL = process.env.REACT_APP_API_URL; // Ensure this points to your rooms API endpoint

const RoomEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    features: [],
  });

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms/${id}`); // Adjust API endpoint for rooms
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };
    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/rooms/${id}`, room); // Adjust API endpoint for rooms
      navigate(`/room/${id}`); // Redirect to room details page after update
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  const handleCancel = () => {
    navigate(`/room/${id}`); // Navigate back to the room details page
  };

  const handleHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="box-container">
      <h1>Edit Room</h1>
      <form onSubmit={handleUpdate} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={room.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="maxcount"
          placeholder="Max Capacity"
          value={room.maxcount}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="phonenumber"
          placeholder="Contact Phone Number"
          value={room.phonenumber}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="rentperday"
          placeholder="Rent per Day ($)"
          value={room.rentperday}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="type"
          placeholder="Room Type (e.g., Single, Double)"
          value={room.type}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={room.description}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={room.location}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="features"
          placeholder='Features (comma-separated, e.g., WiFi, Air Conditioning)'
          value={room.features.join(', ')} // Join array for display in input
          onChange={(e) => handleChange({ target: { name: 'features', value: e.target.value.split(', ') } })} // Split input into array
        />
        
        <div className="room-actions">
          <button type="submit" className="btn btn-update">Update</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default RoomEdit;