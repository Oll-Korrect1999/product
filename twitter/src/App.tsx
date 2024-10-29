import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input type="text" id="result" />
      <br />
      <Button num={"1"}></Button>
      <Button num={"2"}></Button>
      <Button num={"3"}></Button>
      <Button num={"+"}></Button>
      <br />
      <Button num={"4"}></Button>
      <Button num={"5"}></Button>
      <Button num={"6"}></Button>
      <Button num={"-"}></Button>
      <br />
      <Button num={"7"}></Button>
      <Button num={"8"}></Button>
      <Button num={"9"}></Button>
      <Button num={"*"}></Button>
      <br />
      <Button num={"c"}></Button>
      <Button num={"0"}></Button>
      <Button num={"="}></Button>
      <Button num={"/"}></Button>
      <br />
    </div>
  );
}

export default App;
