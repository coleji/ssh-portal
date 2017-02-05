import React from 'react'; //eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { mapToEnterPress } from '../../../../app-util';
//import { submitPassphrase } from './action-creators.js';

@connect(
	() => ({}),
	() => ({
		submitPassphrase: (passphrase) => {
			console.log(passphrase.value);
			passphrase.value = "";
		}
	})
)
class Key extends React.Component {
	render() {
		console.log(this.props.keyObject);
		return (
			<tr>
				<td style={{padding: "2px 15px", textAlign:"right"}}>{this.props.keyObject.alias}</td>
				<td style={{padding: "2px 15px"}}>{(this.props.keyObject.unlocked ? (<i>unlocked</i>) : (<b>locked</b>))}</td>
				<td>{
					(!this.props.keyObject.unlocked)
					? <input type="password" ref="passphrase" onKeyDown={mapToEnterPress(this, () => this.props.submitPassphrase(this.refs.passphrase))} />
					: " "
				}</td>
			</tr>
		);
	}
}

export default Key;
