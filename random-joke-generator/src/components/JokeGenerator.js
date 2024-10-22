import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/JokeGenerator.css';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const lang = Math.random() < 0.5 ? 'en' : 'hi';
      const response = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${lang}`);
      const data = await response.json();

      if (data.type === 'single') {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} - ${data.delivery}`);
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      setJoke('Oops! Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="joke-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? <div className="spinner"></div> : <p>😂 {joke}</p>}
      <button onClick={fetchJoke} className="joke-btn">
        <i className="fas fa-laugh"></i> Get Another Joke
      </button>
    </motion.div>
  );
};

export default JokeGenerator;
