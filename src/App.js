import React from "react";

import "./App.css";

import List from "./components/List/List";
import Form from "./components/Form/Form";

function App(props) {
  return (
    <div className="App">
      <List />
      <Form />
    </div>
  );
}

export default App;
