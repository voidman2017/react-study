import React from "react";

class ClassPropertyArrowFunction extends React.Component {
    handleClick = () => {
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
export default ClassPropertyArrowFunction;
