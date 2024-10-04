import React from 'react';
import '../styles/PersonEdit.css'

const API_URL= process.env.REACT_APP_API_URL
const PersonEdit = () => {

    console.log(API_URL);
  return (
    <div>
      <h2>Edit Person</h2>
    </div>
  );
};

export default PersonEdit;
