import React from 'react';
import './App.css';
import EmailList from './components/EmailList'; // Import the EmailList component
import Filter from './components/Filter'

function App() {
  return (
    <div className="app">
      <Filter />
      <EmailList/>
    </div>
  );
}

export default App;