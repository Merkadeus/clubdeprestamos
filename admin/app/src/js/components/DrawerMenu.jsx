import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { spacing, typography } from 'material-ui/styles';
import { teal300, teal800 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import data from '../data';

const propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

class DrawerMenu extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    const styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: teal800,
        paddingLeft: 40,
        height: 64,
      },
      avatar: {
        div: {
          padding: '15px 0 20px 15px',
          backgroundColor: teal300,
          height: 45,
        },
        icon: {
          float: 'left',
          display: 'block',
          marginRight: 15,
          boxShadow: '0px 0px 0px 8px rgba(0,0,0,0,2)',
        },
        span: {
          paddingTop: 12,
          display: 'block',
          color: 'white',
          fontWeight: 300,
          textShadow: '1px 1px #444',
        },
      },
    };
    return (
      <div>
        <Drawer
          docked={ false }
          open={ this.props.open }
          onRequestChange={ () => this.props.toggleDrawer() }
        >
          <div style={ styles.logo }>Administrador</div>
          <div style={ styles.avatar.div }>
            <Avatar
              src="http://www.material-ui.com/images/uxceo-128.jpg"
              size={ 50 }
              style={ styles.avatar.icon }
            />
            <span style={ styles.avatar.span }>
              { `${this.props.user.name} ${this.props.user.lastName}` }
            </span>
          </div>
          { data.menus.map((menu, index) => {
            return (
              <MenuItem
                key={ index }
                primaryText={ menu.text }
                leftIcon={ menu.icon }
                containerElement={ <Link to={ menu.link } /> }
              />
            );
          }) }
        </Drawer>
      </div>
    );
  }
}

DrawerMenu.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

DrawerMenu.propTypes = propTypes;

export default connect()(DrawerMenu);
