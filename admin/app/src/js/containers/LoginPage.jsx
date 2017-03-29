import React from 'react';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				Login
			</div>
		);
	}
}

export default connect()(LoginPage);
