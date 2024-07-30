import { useState } from "react";
import { Button, Card } from "antd";

const UseState = () => {
  return (
    <>
      <Card>
        <PrimitiveUseState />
      </Card>
      <Card>
        <ReferenceUseState />
      </Card>
    </>
  );
};

const PrimitiveUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>数字：{count}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        第一种方式+1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        第二种方式+1
      </Button>
    </>
  );
};

const ReferenceUseState = () => {
  const [state, setState] = useState({ number: 0 });
  let [count, setCount] = useState(0);

  return (
    <>
      <div>数字形式：{count}</div>
      <Button
        type="primary"
        onClick={() => {
          count++;
          setCount(count);
        }}
      >
        点击+1
      </Button>
      <div>对象形式：{state.number}</div>
      <Button
        type="primary"
        onClick={() => {
          state.number++;
          setState(state);
        }}
      >
        点击+1
      </Button>
      <Button
        style={{ marginLeft: 10 }}
        type="primary"
        onClick={() => {
          setState({
            ...state,
            number: state.number + 1,
          });
        }}
      >
        点击+1
      </Button>
    </>
  );
};

export default UseState;
