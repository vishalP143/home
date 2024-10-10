// src/components/RoomList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Notification from './Notification';
import '../styles/RoomList.css'; // Component-specific styles

const API_URL = process.env.REACT_APP_API_URL; // Ensure this points to your rooms API endpoint

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(API_URL); // Adjust API endpoint for rooms
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="room-list">
      <h1>Room List</h1>
      <Link to="/add-room" className="btn btn-add add-room-button">Add Room</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Max Capacity</th>
            <th>Rent per Day</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>
                <Link to={`/room/${room.id}`} className="room-name">
                  {room.name}
                </Link>
              </td>
              <td>{room.maxcount}</td>
              <td>${room.rentperday}</td> {/* Display rent per day */}
            </tr>
          ))}
        </tbody>
      </table>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
};

export default RoomList;