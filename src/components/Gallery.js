import React from 'react';


// Components
import Player from './Player';



// Hold all the player cards and map over them
const Gallery = (props) => {
    return (
        <div className="gallery">
          {props.players.map( player => 
            <Player
               {...player} // The ... is the 'spread operator'. It's a shortcut that passes all the props down at once.
                // name={player.name}
                // number={player.number}
                // position={player.position}
                // url={player.url}
                key={player.id}
            />
          )}
        </div>
    );
}


export default Gallery;
