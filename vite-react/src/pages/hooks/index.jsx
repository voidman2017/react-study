import { Card } from "antd";
import UseState from "./useState";
import UseEffect from "./useEffect";
const Hooks = () => {
  return (
    <>
      <Card title="useState">
        <UseState />
      </Card>

      <Card title="useEffect">
        <UseEffect />
      </Card>
    </>
  );
};

export default Hooks;
