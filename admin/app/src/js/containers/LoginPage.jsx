import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginBox from '../components/LoginBox';
import { login } from '../actions';

class LoginPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="login-page">
        <LoginBox loginSubmit={ (credentials) => this.props.login(credentials) } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login(credentials) {
			dispatch(login(credentials));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
