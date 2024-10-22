import React from 'react';
import JokeGenerator from './components/JokeGenerator';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Welcome to the Random Joke Generator</h1>
        <p>Click the button to light up your day with a Joke</p>
      </header>

    <main className="app-main">
      <JokeGenerator />
    </main>

    <footer className="app-footer">
    <p>Made with ❤️ for fun and laughter!</p>
    <p>Made with ❤️ by Vishal Pradhan</p>

    <div className="social-icons">
          <a href="https://github.com/vishalP143" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
    </footer>
    </div>
    );
};
export default App;