import React, { useEffect, useRef } from 'react';
import MovingBox from './MovingBox';
import './GameBoard.css';

function GameBoard() {
    const elementRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<MovingBox>(null);

    useEffect(() => {
        const width = (elementRef.current?.clientWidth || 100) - 100;
        const height = (elementRef.current?.clientHeight || 100) - 100;
        const initialX = Math.random() * width;
        const initialY = Math.random() * height;
        boxRef.current?.moveTo(initialX, initialY);
    }, []);

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        const boundingRect = elementRef.current?.getBoundingClientRect();
        boxRef.current?.animateTo(event.clientX - (boundingRect?.left || 0), 
            event.clientY - (boundingRect?.top || 0));
    }

    return (
        <div className="game-board p-2 flex-fill position-relative" onClick={handleClick} ref={elementRef}>
            <MovingBox ref={boxRef} />
        </div>
    );
}

export default GameBoard;
