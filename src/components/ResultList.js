import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ResultList extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<div className="content-area-right">
				<div className="input-group has-danger">
					<input
						type="search"
						className="form-control"
						id="filter"
						aria-describedby="filter-list"
						placeholder="Filter by name..."
					/>
					<div className="input-group-append">
						<span className="input-group-text bg-transparent">
							<i className="fas fa-map-marker-alt" />
						</span>
					</div>
				</div>
				<table className="primary table table-hover">
					<thead>
						<tr>
							<th scope="col">Places</th>
							<th scope="col">Distance</th>
						</tr>
					</thead>
					<tbody>
						<tr className="table-primary">
							<th scope="row">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias, enim.
							</th>
							<td>Column content</td>
						</tr>
						<tr className="table-secondary">
							<th scope="row">Lorem ipsum dolor sit amet consectetur.</th>
							<td>Column content</td>
						</tr>
						<tr className="table-primary">
							<th scope="row">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias, enim.
							</th>
							<td>Column content</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
