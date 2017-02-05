import React from 'react'; //eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

const doAlert = () => alert("test");

@connect(
	// mapStateToProps
	() => ({}),
	// mapDispathToProps
	() => ({})
)
class Server extends React.Component {
	render() {
		return <div>
			<textarea style={{height:"350px", width:"850px"}}></textarea><br />
			<input type="button" value={this.props.alias} onClick={doAlert}/>
		</div>;
	}
}

export default Server;
