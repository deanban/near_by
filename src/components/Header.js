import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Header extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<header className="header">
				<h2>Nearby</h2>
			</header>
		)
	}
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Header
