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
				<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
					<button
						class="navbar-toggler mr-2"
						type="button"
						data-toggle="collapse"
						data-target="#navbar"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<span class="navbar-brand d-flex flex-fill">
						<i class="fas fa-2x fa-map-marked-alt" />
					</span>
					<div class="navbar-collapse collapse" id="navbar">
						<ul class="navbar-nav justify-content-center d-flex flex-fill">
							<li class="nav-item">
								<div className="searchbar">
									<input
										className="search_input"
										type="text"
										name=""
										placeholder="Search..."
									/>
									<a href="#" className="search_icon">
										{'   '}
										<i className="fas fa-search" />
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="d-flex flex-fill" />
				</nav>
			</header>
		)
	}
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Header
