import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Import CSS for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
};

export default NotFound;