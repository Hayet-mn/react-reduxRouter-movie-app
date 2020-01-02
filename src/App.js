import React from "react";
import Header from "./components/header";
import moviesList from "./components/moviesList";
import AddMovie from "./components/addMovie";
import description from "./components/description";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AddMovie />
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={moviesList} />
            <Route path="/description/:id" component={description} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
