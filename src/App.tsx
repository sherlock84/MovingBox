import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import GameBoard from './components/GameBoard';
import GameOptionsContext from './contexts/GameOptionsContext';

function App() {
  const [animationSpeedInMilliseconds, setAnimationSpeed] = useState(1000);

  return (
    <div className="h-100 d-flex flex-column">
      <GameOptionsContext.Provider value={{ animationSpeedInMilliseconds, setAnimationSpeed }}>
        <Toolbar />
        <GameBoard />
      </GameOptionsContext.Provider>
    </div>
  );
}

export default App;
