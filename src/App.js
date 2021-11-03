import React from 'react';
import ContainerApp from './app/index'
import { BrowserRouter as Router } from "react-router-dom";
import './app.css'

export const App = () => {
  return (
    <Router>
      <ContainerApp />
    </Router>
  );
};
