import React from 'react';
import './Person.css';
import Radium from 'radium';


const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(Person);