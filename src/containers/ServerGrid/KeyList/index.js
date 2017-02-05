import React from 'react'; //eslint-disable-line no-unused-vars

import Key from './Key';

class KeyList extends React.Component {
	render() {
		return (
			<table><tbody>
				{this.props.keyList.map(key =>
					<Key key={key.alias} keyObject={key} />
				)}
			</tbody></table>
		);
	}
}

export default KeyList;
