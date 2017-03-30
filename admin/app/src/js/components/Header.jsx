import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal800 } from 'material-ui/styles/colors';
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
    const leftDrawer = this.props.isAuth ? <LeftDrawer /> : '';
    return (
      <div>
        <AppBar
          title="Club de Préstamos - Admin"
          showMenuIconButton={ this.props.isAuth }
          onLeftIconButtonTouchTap={ () => this.props.toggleDrawer() }
          style={
            { backgroundColor: teal800 }
          }
        />
        { leftDrawer }
      </div>
    );
  }
}

Header.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.auth,
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
