import React from 'react';
import { connect } from 'react-redux'; //eslint-disable-line no-unused-vars

import { getServerList } from './action-creators';

@connect(
	state => ({
		config : state.config,
		serverList : state.serverList || []
	}),
	dispatch => ({
		getServerList: (config) => {
			getServerList(dispatch, config);
		}
	})
)
class ServerGrid extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.getServerList(this.props.config);
	}
	render() {
		return (
			<table><tbody>
			{this.props.serverList.map((row, i) =>
				<tr key={i}>{row.map(col =>
					<td key={col}>{col}</td>
				)}</tr>
			)}
			</tbody></table>
		);
	}
}

module.exports = ServerGrid;
