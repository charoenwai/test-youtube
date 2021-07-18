import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import component
import Header from "./views/Header";
import Sidebar from "./views/Sidebar";
import Recommended from "./views/Recommended";
import Search from "./views/Search";
import Video from "./views/Video";
// import style
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchText">
            <div className="app-content">
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route path="/video/:videoId">
            <div className="app-content">
              <Video />
            </div>
          </Route>
          <Route path="/">
            <div className="app-content">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
