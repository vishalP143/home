import React from 'react';

const API_URL= process.env.REACT_APP_API_URL
const PersonAdd = () => {

   console.log(API_URL);
  return (
    <div>
      <h2>Add Person</h2>
    </div>
  );
};

export default PersonAdd;
