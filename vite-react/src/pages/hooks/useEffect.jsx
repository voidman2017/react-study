import { useState, useEffect } from "react";
import { Button } from "antd";

const Child = () => {
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("挂载");

    return () => {
      console.log("卸载");
    };
  }, [count]);

  return (
    <>
      <h2>child component</h2>
      <p>count: {count}</p>
      <Button onClick={() => clickHanlder()}>add</Button>
    </>
  );
};

const WithoutInitialRender = () => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (isMounted) {
      console.log("WithoutInitialRender 副作用执行");
    } else {
      setIsMounted(true);
    }
    return ()=>{
      console.log("WithoutInitialRender 销毁")
    }
  }, [count]); // 在 count 变化时执行

  return (
    <>
      <h2>WithoutInitialRender component</h2>
      <p>count: {count}</p>
      <Button onClick={clickHandler}>add</Button>
    </>
  );
};

const WithoutDestroyed = () => {
  const [count, setCount] = useState(0);
  const [skipCleanup, setSkipCleanup] = useState(true);

  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("WithoutDestroyed 挂载");

    return () => {
      if (!skipCleanup) {
        console.log("WithoutDestroyed 卸载");
      }
    };
  }, [skipCleanup]);

  return (
    <>
      <h2>WithoutDestroyed component</h2>
      <p>count: {count}</p>
      <Button onClick={clickHandler}>add</Button>
      <Button onClick={() => setSkipCleanup(true)}>Skip Cleanup</Button>
    </>
  );
};

const UseEffect = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {flag ? "卸载" : "挂载"}
      </Button>
      {flag && <Child />}
      {flag && <WithoutInitialRender />}
      {flag && <WithoutDestroyed />}
    </>
  );
};

export default UseEffect;

/*  */
