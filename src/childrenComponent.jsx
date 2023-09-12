import React from "react";

function childrenComponent(props) {
    return (
        <div>
            <h2>childrenComponent</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <div>{props.children}</div>
        </div>
    );

}

export default childrenComponent;