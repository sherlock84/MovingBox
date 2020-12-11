import React from 'react';

export interface GameOptionsChangeFunc {
    (animationSpeedInMilliseconds: number): void;
}

export interface GameOptionsContextInfo {
    animationSpeedInMilliseconds: number;
    setAnimationSpeed: GameOptionsChangeFunc;
}

const GameOptionsContext = React.createContext<GameOptionsContextInfo>({
    animationSpeedInMilliseconds: 1000,
    setAnimationSpeed: () => void 0
});

export default GameOptionsContext;
