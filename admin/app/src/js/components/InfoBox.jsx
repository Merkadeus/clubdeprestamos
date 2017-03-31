import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { typography } from 'material-ui/styles';
import { grey800 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const propTypes = {
	icon: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	goTo: PropTypes.string.isRequired,
};

class InfoBox extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
		const styles = {
			iconStyles: {
				backgroundColor: this.props.color,
			},
			title: {
				fontWeight: typography.fontWeightLight,
				color: grey800,
			},
			content: {
				fontWeight: typography.fontWeightMedium,
				color: grey800,
			},
		};
		const icon = `fa ${this.props.icon} fa-3x`;
    return (
      <Paper className="info-box">
				<Link to={ this.props.goTo }>
					<span className="icon" style={ styles.iconStyles }>
						<i className={ icon } />
					</span>
					<div className="content">
						<span style={ styles.title }>{ this.props.title }</span>
						{ this.props.content ? <span style={ styles.content }>{ this.props.content }</span> : ''}
					</div>
				</Link>
			</Paper>
    );
  }
}

InfoBox.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

InfoBox.propTypes = propTypes;

export default connect()(InfoBox);
