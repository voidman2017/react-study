import { Card } from "antd";
import React from "react";
import ImportImage from "./import引入图片";
// import RequireImage from "./require引入图片"; // vite 不支持

const Image = () => {
    return (
        <>
            <Card title="图片引入方式">
                <ImportImage/>
            </Card>
        </>
    );
};

export default Image;
