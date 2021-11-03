import React from 'react';
import ContainerApp from './app/index'
import { BrowserRouter as Router } from "react-router-dom";
import './app.css'

function App() {
  return (
    <Router>
      <ContainerApp />
    </Router>
  );
}

export default App;
