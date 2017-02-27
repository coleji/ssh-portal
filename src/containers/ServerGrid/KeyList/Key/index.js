import React from 'react'; //eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { mapToEnterPress } from '../../../../app-util';
import { unlockKey } from '../../action-creators.js';

@connect(
	state => ({ config : state.config}),
	dispatch => ({
		submitPassphrase: (config, alias, passphrase) => {
			unlockKey(dispatch, config, alias, passphrase.value);
			passphrase.value = "";
		}
	})
)
class Key extends React.Component {
	render() {
		return (
			<tr>
				<td style={{padding: "2px 15px", textAlign:"right"}}>{this.props.keyObject.alias}</td>
				<td style={{padding: "2px 15px"}}>{(this.props.keyObject.unlocked ? (<i>unlocked</i>) : (<b>locked</b>))}</td>
				<td>{
			//		(!this.props.keyObject.unlocked)
					/*?*/ <input type="password" ref="passphrase" onKeyDown={mapToEnterPress(this, () => this.props.submitPassphrase(this.props.config, this.props.keyObject.alias, this.refs.passphrase))} />
				//	: " "
				}</td>
			</tr>
		);
	}
}

export default Key;
