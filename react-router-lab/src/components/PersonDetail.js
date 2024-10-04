import React from 'react';
import '../styles/PersonDetail.css'

const API_URL= process.env.REACT_APP_API_URL

const PersonDetail = () => {
    console.log(API_URL);
  return (
    <div>
      <h2>Person Details</h2>
    </div>
  );
};

export default PersonDetail;
