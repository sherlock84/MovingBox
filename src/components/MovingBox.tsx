import React from 'react';
import './MovingBox.css';

export interface MovingBoxProps {
    initialX?: number;
    initialY?: number;
}

export interface MovingBoxState {
    x: number;
    y: number;
}

class MovingBox extends React.Component<MovingBoxProps, MovingBoxState> {
    constructor(props: MovingBoxProps) {
        super(props);
        this.state = { x: props.initialX || 0, y: props.initialY || 0 };
    }

    animateTo(x: number, y: number) {
        
    }

    moveTo(x: number, y: number) {
        this.setState({ x, y });
    }

    render() {
        return (
            <div className="position-absolute bg-primary moving-box" 
                 style={{ left: this.state.x, top: this.state.y }}>
            </div>
        );
    }
}

export default MovingBox;
