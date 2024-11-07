import { Card } from "antd";
import React from "react";
import ArrowFunction from "./渲染函数中使用箭头函数";
import ClassPropertyArrowFunction from "./类属性初始化器中使用箭头函数";
import BindMethod from "./bind方法绑定";

const This = () => {
    return (
        <>
            <Card title="this绑定方式">
                {/* https://www.mianshiya.com/bank/1817900465338241026/question/1817828040290377730 */}
                <ArrowFunction />
                <ClassPropertyArrowFunction/>
                <BindMethod/>
            </Card>
        
        </>
    );
};

export default This;
