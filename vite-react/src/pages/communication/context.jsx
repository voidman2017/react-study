import React, { useState } from "react";
import { Checkbox, Button, Input } from "antd";

const ThemeContext = React.createContext(null);

const theme = {
  dark: {
    color: "#5B8FF9",
    background: "#5B8FF9",
    border: "1px solid #5B8FF9",
    type: "dark",
    buttonType: "primary",
  },
  light: {
    color: "#E86452",
    background: "#E86452",
    border: "1px solid #E86452",
    type: "light",
    buttonType: "default",
  },
};

const Context = () => {
  const [themeContextValue, setThemeContext] = useState(theme.dark);

  return (
    <ThemeContext.Provider
      value={{ ...themeContextValue, setTheme: setThemeContext }}
    >
      <Child />
      <Child />
      <Child2 />
    </ThemeContext.Provider>
  );
};

const Child = () => {
  const context = React.useContext(ThemeContext);
  const { border, setTheme, color, buttonType } = context;

  return (
    <div style={{ border, color, padding: 20 }}>
      <div>
        <span> 选择主题： </span>
        <CheckboxView
          label="主题1"
          name="dark"
          onChange={() => setTheme(theme.dark)}
        />
        <CheckboxView
          label="主题2"
          name="light"
          onChange={() => setTheme(theme.light)}
        />
      </div>
      <div style={{ color, marginTop: 8 }}>
        大家好，我是小杜杜，一起玩转Hooks吧！
      </div>
      <div style={{ marginTop: 8 }}>
        <Input
          placeholder="请输入你的名字"
          style={{ color, border, marginBottom: 10 }}
        />
        <Button type={buttonType}>提交</Button>
      </div>
    </div>
  );
};

const Child2 = () => {
  const context = React.useContext(ThemeContext);
  const { border, color } = context;
  return (
    <>
      <h1 style={{ border, color }}>这是组件2</h1>
    </>
  );
};

const CheckboxView = ({ label, name, onChange }) => {
  const context = React.useContext(ThemeContext);
  const { color, type } = context;

  return (
    <div style={{ display: "inline-block", marginLeft: 10 }}>
      <Checkbox checked={type === name} style={{ color }} onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};

export default Context;
