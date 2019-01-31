import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Header from './components/Layout/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ResultContainer from './components/Results/ResultContainer';
import MapContainer from './components/Map/MapContainer';
import Footer from './components/Layout/Footer';
import store from './components/store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Sidebar />
            <ResultContainer />
            <MapContainer isMarkerShown />
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
