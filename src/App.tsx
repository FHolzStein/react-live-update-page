import './wdyr'
import React from "react";
import "./App.css";
import { UpdateForm } from "./UpdateForm";
import { UpdateFormContextReducer } from "./UpdateForm/context";

function App() {
  return (
    <div className="App">
      <header className="App-header">Small example App</header>
      <UpdateFormContextReducer>
        <UpdateForm />
      </UpdateFormContextReducer>
    </div>
  );
}

export default App;
