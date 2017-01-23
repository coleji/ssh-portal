import React from 'react';
import { connect } from 'react-redux'; //eslint-disable-line no-unused-vars


@connect(
	() => ({}),
	() => ({})
)
class ServerGrid extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.getPunches(0);
	}
	render() {
		return (
			<span>Hello!</span>
		);
	}
}

module.exports = ServerGrid;
