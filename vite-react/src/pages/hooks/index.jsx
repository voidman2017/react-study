import { Card } from "antd";
import UseState from "./useState";
import UseEffect from "./useEffect";
import UseContext from "./useContext";
import UseReducer from "./useReducer";
import UseMemo from "./useMemo";
import UseCallback from "./useCallback";
import UseRef from "./useRef";
import UseImperativeHandle from "./useImperativeHandle";
import UseLayoutEffect from "./useLayoutEffect";
const Hooks = () => {
  return (
    <>
      <Card title="useState">
        <UseState />
      </Card>

      <Card title="useEffect">
        <UseEffect />
      </Card>

      <Card title="useContext">
        <UseContext />
      </Card>

      <Card title="useReducer">
        <UseReducer />
      </Card>

      <Card title="useMemo">
        <UseMemo />
      </Card>

      <Card title="useCallback">
        <UseCallback />
      </Card>

      <Card title="useRef">
        <UseRef />
      </Card>

      <Card title="useImperativeHandle">
        <UseImperativeHandle />
      </Card>

      <Card title="useLayoutEffect">
        <UseLayoutEffect />
      </Card>
      
    </>
  );
};

export default Hooks;
