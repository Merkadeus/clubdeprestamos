import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { toggleDrawer } from '../actions';
import LeftDrawer from '../containers/LeftDrawer';

class Header extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
      <div>
        <AppBar
          title="Club de Préstamos - Admin"
          showMenuIconButton={ this.props.isAuth }
          onLeftIconButtonTouchTap={ () => this.props.toggleDrawer() }
        />
        <LeftDrawer />
      </div>
    );
  }
}

Header.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.User.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer() {
      return dispatch(toggleDrawer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
