import { useState, useRef, useImperativeHandle } from "react";
import { Button } from "antd";

const Child = ({ cRef }) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(cRef, () => ({
    add,
  }));

  const add = () => {
    setCount((v) => v + 1);
  };

  return (
    <div>
      <p>点击次数：{count}</p>  
      <Button onClick={() => add()}> 子组件的按钮，点击+1</Button>
    </div>
  );
};

const UseImperativeHandle = () => {
  const ref = useRef(null);

  return (
    <>
      <div>useImperativeHandle</div>
      <div></div>
      <Button type="primary" onClick={() => ref.current.add()}>
        父组件上的按钮，点击+1
      </Button>
      <Child cRef={ref} />
    </>
  );
};

export default UseImperativeHandle;
