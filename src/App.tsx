import React from 'react';
import Toolbar from './components/Toolbar';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <Toolbar />
      <GameBoard />
    </div>
  );
}

export default App;
