import React from "react";

class BindMethod extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me
            </button>
        );
    }
}

export default BindMethod;
