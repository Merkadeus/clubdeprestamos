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
        <DrawerMenu
          open={ this.props.drawerView }
          toggleDrawer={ () => this.props.toggleDrawer() }
          user={ this.props.user }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
    drawerView: state.leftDrawer.drawerView,
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
