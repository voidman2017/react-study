import React from "react";

const NoPropsFunctionComponent = (props) => {   
  return <div>{props.text}</div>;
};

NoPropsFunctionComponent.defaultProps = {
  text: '默认文本2'
};

export default NoPropsFunctionComponent;
