import React from 'react';



const Player = (props) => {
    
    return (
        <div className="playerCard">
            <div>
                <img src={props.url} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <h2 id="number">{props.number}</h2>
            <ul>
                <li><strong>Position: </strong>{props.position}</li>
                {/* <li><strong>PLACE HOLDER</strong></li> */}
                <li><strong>Origin: </strong>{props.origin}</li>
                <li><strong>DOB: </strong>{props.DOB}</li>


                {/* Add more stuff here */}
            </ul>

            <img src='./img/bear.jpg' id='bear'/>
        </div>
    );
}


export default Player;

