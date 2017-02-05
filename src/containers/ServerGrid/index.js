import React from 'react';
import { connect } from 'react-redux'; //eslint-disable-line no-unused-vars

import { getServerList, getKeyList } from './action-creators';
import Server from './Server';
import KeyList from './KeyList';


@connect(
	state => ({
		config : state.config,
		serverList : state.serverList || [],
		keyList : state.keyList || []
	}),
	dispatch => ({
		getServerList: (config) => {
			getServerList(dispatch, config);
		},
		getKeyList: (config) => {
			getKeyList(dispatch, config);
		}
	})
)
class ServerGrid extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.getServerList(this.props.config);
		this.props.getKeyList(this.props.config);
	}
	render() {
		return (
			<div>
				<KeyList keyList={this.props.keyList}/><br />
				<table><tbody>
					{this.props.serverList.map((row, i) =>
						<tr key={i}>{row.map(col =>
							<td key={col}>
								<Server alias={col} />
							</td>
						)}</tr>
					)}
				</tbody></table>
			</div>
		);
	}
}

module.exports = ServerGrid;
