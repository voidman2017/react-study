import { Card } from "antd";
import MixinComponent from "./mixin";
import ExtendsComponent from "./extends";
import HOC from './HOC'
const IntensifyComponent = () => {
  return (
    <>
      <Card title="mixin">
        <MixinComponent />
      </Card>

      <Card title="extends">
        <ExtendsComponent />
      </Card>

      <Card>
        <HOC></HOC>
      </Card>
    </>
  );
};

export default IntensifyComponent;
