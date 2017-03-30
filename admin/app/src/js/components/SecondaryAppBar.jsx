import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

class SecondaryAppBar extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    const content = this.props.content ? this.props.content : '';
    const divider = this.props.content ? <ToolbarSeparator /> : '';
    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <ToolbarTitle text={ this.props.title } style={ { paddingLeft: 20 } } />
          { divider }
          { content }
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

SecondaryAppBar.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

SecondaryAppBar.propTypes = propTypes;

export default connect()(SecondaryAppBar);
