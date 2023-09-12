    import React from "react";

    class classComponent extends React.Component {
        render(){
            return (
                <div>
                    <h2>classComponent</h2>
                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                </div>
            );
        }
    }

    export default classComponent;