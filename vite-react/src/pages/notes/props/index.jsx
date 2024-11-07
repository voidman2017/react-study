import { Card } from "antd";
import React from "react";
import NoPropsClassComponent from "./类组件设定默认属性值";
import NoPropsFunctionComponent from "./函数组件设定默认属性";
import NoPropsES6Component from "./ES6解构赋值设定默认值";
import PropTypesComponent from "./PropTypes校验";

const Props = () => {
    return (
        <>
            <Card title="react组件属性没有传值">
                {/* https://www.mianshiya.com/bank/1817900465338241026/question/1817828039698980865 */}
                <NoPropsClassComponent />
                <NoPropsFunctionComponent />
                <NoPropsES6Component />
            </Card>
            <Card title="react组件属性类型检查">
                {/* https://www.mianshiya.com/bank/1817900465338241026/question/1817828039698980865 */}
                <PropTypesComponent text={123} />
                {/* 当校验类型不符合预期，控台会有警告 */}
            </Card>
        </>
    );
};

export default Props;
