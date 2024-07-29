import React from "react";
import reactMixin from "react-mixin";
import { Button } from "antd";

const LoggerMixin = {
  log(message) {
    console.warn(message);
  },
};

class MixinComponent extends React.Component {
  componentDidMount() {
    this.log("MixinComponent Mounted");
  }

  render() {
    return (
      <div>
        <p>Mixin Component</p>
        <Button
          onClick={() => {
            this.log("click");
          }}
        >
          log
        </Button>
      </div>
    );
  }
}

reactMixin(MixinComponent.prototype, LoggerMixin);

export default MixinComponent;
