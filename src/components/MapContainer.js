import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MapContainer extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<div className="map">
				<h2>map</h2>
			</div>
		)
	}
}
