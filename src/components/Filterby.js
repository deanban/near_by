import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Filterby extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<div className="content-area-left">
				<h2>content1</h2>
			</div>
		)
	}
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Filterby
