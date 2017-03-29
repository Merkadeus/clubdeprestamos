import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {
  loginSubmit: PropTypes.func.isRequired,
};

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
			username: '',
			password: '',
		};
		autobind(this);
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
		const loginBtnStyle = {
			marginTop: '1rem',
		};
    return (
			<div className="box">
        <TextField
          hintText="Email"
          floatingLabelText="Usuario"
          value={ this.state.username }
          onChange={ (e) => {
            this.setState({
								username: e.target.value,
            });
          } }
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          value={ this.state.password }
          onChange={ (e) => {
            this.setState({
							password: e.target.value,
            });
          } }
        />
        <RaisedButton
          style={ loginBtnStyle }
          label="Login"
          primary
          onClick={ () => this.props.loginSubmit(this.state) }
        />
      </div>
    );
  }
}

LoginBox.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

LoginBox.propTypes = propTypes;

export default connect()(LoginBox);
