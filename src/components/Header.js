import React from 'react';




const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <p>Gallery created by Sam Costanzo</p>
        </div>
    );
}




export default Header;