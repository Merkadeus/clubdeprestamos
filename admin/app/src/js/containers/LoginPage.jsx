import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LoginBox from '../components/LoginBox';
import { login } from '../actions';

class LoginPage extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    if (sessionStorage.getItem('auth') && this.props.auth) {
      browserHistory.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      browserHistory.push('/dashboard');
    }
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
		auth: state.user.auth,
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
