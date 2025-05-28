import React from 'react';
import './App.css';
import firebaseApp from './firebaseConfig'; // Import Firebase app instance

function App() {
  // You can log the firebaseApp to ensure it's initialized if you want
  console.log('Firebase App Initialized:', firebaseApp);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to TrackIt Web!
        </p>
        <p>
          Firebase is configured.
        </p>
      </header>
    </div>
  );
}

export default App;
