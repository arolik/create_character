import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import CreateChar from './components/CreateChar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CreateChar />
    </div>
    </BrowserRouter>
  );
}

export default App;
