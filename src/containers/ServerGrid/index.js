import React from 'react';
import { connect } from 'react-redux'; //eslint-disable-line no-unused-vars

import { getServerList } from './action-creators';

const doAlert = () => alert("test");

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
					<td key={col}>
						<textarea style={{height:"350px", width:"850px"}}></textarea><br />
						<input type="button" value="Blah" onClick={doAlert}/>
					</td>
				)}</tr>
			)}
			</tbody></table>
		);
	}
}

module.exports = ServerGrid;
