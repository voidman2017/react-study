import { useState, useEffect } from "react";
import { Button } from "antd";

const WithoutDepsComponent = () => {
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("WithoutDepsComponent 副作用方法执行");
    return () => {
      console.log("WithoutDepsComponent 清理方法执行");
    };
  });

  return (
    <>
      <h2>WithoutDepsComponent component</h2>
      <p>count: {count}</p>
      <Button onClick={() => clickHanlder()}>add</Button>
    </>
  );
};

const WithDepsComponent = () => {
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("WithDepsComponent 副作用方法执行");
    return () => {
      console.log("WithDepsComponent 清理方法执行");
    };
  }, [count]);

  return (
    <>
      <h2>WithDepsComponent component</h2>
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
    return () => {
      console.log("WithoutInitialRender 清理方法执行");
    };
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
  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("WithoutDestroyed 副作用方法执行");
  }, []);

  return (
    <>
      <h2>WithoutDestroyed component</h2>
      <p>count: {count}</p>
      <Button onClick={clickHandler}>add</Button>
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
        {flag ? "销毁" : "挂载"}
      </Button>
      {flag && <WithoutDepsComponent />}
      {flag && <WithDepsComponent />}
      {flag && <WithoutInitialRender />}
      {flag && <WithoutDestroyed />}
    </>
  );
};

export default UseEffect;

/*  */
