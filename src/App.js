import React from "react";
import { Provider } from 'react-redux';
import myStore from './ducks/store';

import "./App.css";

import List from "./components/List/List";
import Form from "./components/Form/Form";

function App(props) {
  return (
    //you use the provider to make the connection from our store to our app
    <Provider store = {myStore}>
      <div className="App">
        <List />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
