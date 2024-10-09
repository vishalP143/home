import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL; // Ensure this points to your rooms API endpoint

const RoomAdd = ({ onRoomAdded = () => {} }) => {
  const [name, setName] = useState('');
  const [maxcount, setMaxCount] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [rentperday, setRentPerDay] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [features, setFeatures] = useState([]);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !maxcount || !phonenumber || !rentperday || !type || !description || !location) return;

    try {
      const response = await axios.post(`${API_URL}/rooms`, {
        name,
        maxcount,
        phonenumber,
        rentperday,
        type,
        description,
        location,
        features: features.split(',').map(feature => feature.trim()) // Convert comma-separated features to an array
      });
      const newRoomId = response.data.id;

      // Clear form fields
      setName('');
      setMaxCount('');
      setPhoneNumber('');
      setRentPerDay('');
      setType('');
      setDescription('');
      setLocation('');
      setFeatures('');

      // Show success notification
      setShowNotification({ type: 'success', text: `Room "${response.data.name}" added successfully!` });

      // Navigate to the new room's detail page
      setTimeout(() => navigate(`/room/${newRoomId}`), 2000); // Wait for 2 seconds before navigating
    } catch (error) {
      console.error('Error adding room:', error);
      setShowNotification({ type: 'error', text: 'Failed to add room. Please try again.' });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  return (
    <div className="box-container">
      <h2>Add Room</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Room Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Max Capacity"
          value={maxcount}
          onChange={(e) => setMaxCount(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Contact Phone Number"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Rent per Day ($)"
          value={rentperday}
          onChange={(e) => setRentPerDay(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Room Type (e.g., Single, Double)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder='Features (comma-separated, e.g., WiFi, Air Conditioning)'
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />

        <div className="button-group">
          <button type="submit" className="btn btn-add">Add Room</button>
          <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
      {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default RoomAdd;