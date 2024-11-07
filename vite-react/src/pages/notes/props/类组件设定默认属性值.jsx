import React from "react";

class NoPropsClassComponent extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

NoPropsClassComponent.defaultProps = {
  text: '默认文本1'
};

export default NoPropsClassComponent;
