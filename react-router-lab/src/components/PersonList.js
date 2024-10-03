import React from 'react';
import axios from 'axios';

const PersonList = () => {
    const output = axios.get("https://5000-vishalp143-home-3gexhb0f0lt.ws-us116.gitpod.io/persons")

    console.log(output);

    const API_URL= process.env.REACT_APP_API_URL
    console.log(API_URL)
    
  return (
    <div>
      <h2>This is the Person List</h2>
    </div>
  );
};

export default PersonList;
