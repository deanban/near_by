import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

export default class MapContainer extends Component {
	static defaultProps = {
		center: {
			lat: 40.75912125,
			lng: -74.0042503
		},
		zoom: 12
	}

	render() {
		return (
			<div className="map">
				<div style={{ height: '100vh', width: '100%' }}>
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE'
						}}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
					/>
				</div>
			</div>
		)
	}
}
