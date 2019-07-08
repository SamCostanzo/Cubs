import React from 'react';

const Player = (props) => {
    
    // let img = require(props.url);
    return (
        <div className="playerCard">
            <div>
                <img src={props.url} alt={props.name} />
                {/* <img src={require('../img/rizzo.jpg')} /> */}
            </div>
            <h2>{props.name}</h2>
            <h3>Player Profile</h3>
            <ul>
                <li><strong>Number: </strong>{props.number}</li>
                <li><strong>Position: </strong>{props.position}</li>
            </ul>
        </div>
    );
}


export default Player;

