import React, { Component } from "react";
import Navbar from "./Components/NavBar/NavBar";
import TourList from "./Components/TourList/TourList";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList></TourList>
      </main>
    );
  }
}
export default App;
