import React from 'react';
import axios from 'axios';
import '../styles/PersonList.css'

const API_URL= process.env.REACT_APP_API_URL
const output = axios.get("https://5000-vishalp143-home-3ea2ftkv3tu.ws-us116.gitpod.io/persons")
const PersonList = () => {


    console.log(output);
    console.log(API_URL)
    
  return (
    <div class="person-list">
      <h2>This is the Person List</h2>
    </div>
  );
};

export default PersonList;
