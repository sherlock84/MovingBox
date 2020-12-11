import React, { useEffect, useRef } from 'react';
import MovingBox from './MovingBox';

export interface GameBoardProps {
}

function GameBoard(props: GameBoardProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<MovingBox>(null);

    useEffect(() => {
        const width = (elementRef.current?.clientWidth || 100) - 100;
        const height = (elementRef.current?.clientHeight || 100) - 100;
        const initialX = Math.random() * width;
        const initialY = Math.random() * height;
        boxRef.current?.moveTo(initialX, initialY);
    }, []);

    return (
        <div className="game-board p-2 flex-fill position-relative" ref={elementRef}>
            <MovingBox ref={boxRef} />
        </div>
    );
}

export default GameBoard;
