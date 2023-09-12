import React from "react";

function functionComponent(props) {
    return (
        <div>
            <h2>functionComponent</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default functionComponent;