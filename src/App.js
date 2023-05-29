import React from "react";
import "./App.css";
import NewsApp from "./components/NewsApp/NewsApp";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="app">News of the World</h1>
      <Router>
        <NewsApp />
      </Router>
    </div>
  );
};

export default App;
