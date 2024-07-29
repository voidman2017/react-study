import React from "react";
import { Button, Card } from "antd";

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  componentDidMount() {
    console.log("BaseComponent Mounted");
  }

  render() {
    return (
      <Card>
        <p>Base Component: {this.state.count}</p>
        <Button onClick={this.increment}>Increment</Button>
      </Card>
    );
  }
}

class ExtendsComponent extends BaseComponent {
  componentDidMount() {
    super.componentDidMount();
    console.log("ExtendsComponent Mounted");
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }
  increment = () => { //如果为 increment ，则覆盖
    this.setState((prevState) => ({ count: prevState.count + 2 }));
    console.log('===debug=== this: ', this);
  };

  render() {
    return (
      <div>
        <h1>Enhanced Component</h1>
        {super.render()}
        <p>Additional Content in ExtendsComponent</p>
        <p>Extends Component: {this.state.count}</p>
      </div>
    );
  }
}

export default ExtendsComponent;
