import { Card } from "antd";
import ParentToChild from "./parentToChild";
import ChildToParent from "./childToParent";
import Context from "./context";
import './index.scss'

const Communication = () => {
  return (
    <>
      <Card title="父传子">
        <ParentToChild />
      </Card>

      <Card title="子传父">
        <ChildToParent />
      </Card>

      <Card title="context">
        <Context />
      </Card>
    </>
  );
};

export default Communication;
