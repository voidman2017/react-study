import React from "react";

class ArrowFunction extends React.Component {
    handleClick = () => {
        console.log(this);
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                Click Me
            </button>
        );
    }
}

export default ArrowFunction;
