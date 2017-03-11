import React from 'react'; //eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { getUpdates, update } from '../action-creators';

@connect(
	// mapStateToProps
	state => ({ config : state.config}),
	// mapDispathToProps
	dispatch => ({
		getUpdates : (config, alias) => {
			getUpdates(dispatch, config, alias);
		},
		update : (config, alias) => {
			update(dispatch, config, alias);
		}
	})
)
class Server extends React.Component {
	render() {
		return <div>
			<b>    -----   {this.props.alias}   -----    </b><br />
			<textarea style={{height:"350px", width:"850px"}} value={this.props.response}></textarea><br />
			<input type="button" value="GetUpdates" onClick={() => {this.props.getUpdates(this.props.config, this.props.alias);}}/>
			<input type="button" value="UPDATE" onClick={() => {this.props.update(this.props.config, this.props.alias);}}/>
		</div>;
	}
}

export default Server;
