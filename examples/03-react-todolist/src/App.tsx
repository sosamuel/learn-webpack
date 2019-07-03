import React from "react";
import Content from "./components/Content";
const { hot } = require("react-hot-loader/root");

const App = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default hot(App);
