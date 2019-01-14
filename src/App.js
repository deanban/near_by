import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Filterby from './components/Filterby'
import ResultList from './components/ResultList'
import MapContainer from './components/MapContainer'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<Header />
					<Filterby />
					<ResultList />
					<MapContainer />
					<Footer />
				</div>
			</div>
		)
	}
}

export default App
