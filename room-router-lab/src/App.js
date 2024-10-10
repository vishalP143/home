// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList'; // Updated import for RoomList
import RoomDetail from './components/RoomDetail'; // Updated import for RoomDetail
import RoomAdd from './components/RoomAdd'; // Updated import for RoomAdd
import RoomEdit from './components/RoomEdit'; // Updated import for RoomEdit
import './App.css'; // Parent styles

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<RoomList />} /> {/* Route for room list */}
                    <Route path="/add-room" element={<RoomAdd />} /> {/* Route for adding a room */}
                    <Route path="/edit/:id" element={<RoomEdit />} /> {/* Route for editing a room */}
                    <Route path="/room/:id" element={<RoomDetail />} /> {/* Route for room details */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;