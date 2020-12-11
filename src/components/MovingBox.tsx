import React from 'react';
import GameOptionsContext from '../contexts/GameOptionsContext';

import './MovingBox.css';

export interface MovingBoxProps {
    initialX?: number;
    initialY?: number;
}

export interface MovingBoxState {
    x: number;
    y: number;
    isAnimated: boolean;
}

class MovingBox extends React.Component<MovingBoxProps, MovingBoxState> {
    constructor(props: MovingBoxProps) {
        super(props);
        this.state = { x: props.initialX || 0, y: props.initialY || 0, isAnimated: false };
    }

    animateTo(x: number, y: number) {
        this.setState({ x, y, isAnimated: true });
    }

    moveTo(x: number, y: number) {
        this.setState({ x, y, isAnimated: false });
    }

    render() {
        const style: React.CSSProperties = {
            left: this.state.x,
            top: this.state.y,
        };

        if (this.state.isAnimated) {
            const { animationSpeedInMilliseconds } = this.context;
            style.transition = 'linear';
            style.transitionDuration = `${animationSpeedInMilliseconds}ms`;
        }

        return (
            <div className="position-absolute bg-primary moving-box" style={style}>
            </div>
        );
    }
}

MovingBox.contextType = GameOptionsContext;

export default MovingBox;
