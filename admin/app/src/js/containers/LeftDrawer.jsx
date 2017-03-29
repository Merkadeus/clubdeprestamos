import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';
import DrawerMenu from '../components/DrawerMenu';

class LeftDrawer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <DrawerMenu open={ this.props.drawerView } toggleDrawer={ () => this.props.toggleDrawer() } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.User.auth,
    drawerView: state.LeftDrawer.drawerView,
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer() {
      return dispatch(toggleDrawer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
