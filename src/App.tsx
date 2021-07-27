import React from 'react';
import Routes from './constants/routes';
import APIContexts from './contexts/APIContext';

function App() {
  return (
    <APIContexts>
      <Routes />
    </APIContexts>
  );
}

export default App;
