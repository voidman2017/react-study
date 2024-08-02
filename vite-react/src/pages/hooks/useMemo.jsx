import { useState, useMemo } from "react";
import { Button } from "antd";

const usePowWithoutMemo = (list) => {
  return list.map((item) => {
    console.log("我是usePow");
    return Math.pow(item, 2);
  });
};

const UseStateComp = () => {
  let [flag, setFlag] = useState(true);

  const data = usePowWithoutMemo([1, 2, 3]);

  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        状态切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

const usePowWithUseMemo = (list) => {
  return useMemo(
    () =>
      list.map((item) => {
        console.log(1);
        return Math.pow(item, 2);
      }),
    []
  );
};

const UseMemoComp = () => {
  let [flag, setFlag] = useState(true);

  const data = usePowWithUseMemo([1, 2, 3]);

  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        状态切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

const UseMemo = () => {
  return (
    <>
      <UseStateComp />
      <UseMemoComp />
    </>
  );
};

export default UseMemo;
