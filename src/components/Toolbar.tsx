import React, { ChangeEvent, useContext } from 'react';
import GameOptionsContext from '../contexts/GameOptionsContext';

function Toolbar() {
    const { animationSpeedInMilliseconds, setAnimationSpeed } = useContext(GameOptionsContext);

    function handleSpeedChange(event: ChangeEvent<HTMLInputElement>) {
        setAnimationSpeed(Number(event.target.value));
    }

    return (
        <div className="p-2 form-inline">
            <div className="form-group">
                <label htmlFor="nbrSpeed" className="form-label mr-sm-2">Move Speed</label>
                <div className="input-group">
                    <input id="nbrSpeed" type="number" className="form-control" defaultValue={animationSpeedInMilliseconds} onChange={handleSpeedChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">ms</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
