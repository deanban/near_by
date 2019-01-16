import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ResultList from "./components/ResultList";
import MapContainer from "./components/MapContainer";
import Footer from "./components/Footer";

import store from "./components/store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Sidebar />
            <ResultList />
            <MapContainer />
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
