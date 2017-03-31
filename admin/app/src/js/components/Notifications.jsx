import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';

const propTypes = {
  onclickInvestors: PropTypes.func.isRequired,
  newInvestors: PropTypes.number.isRequired,
  newLoans: PropTypes.number.isRequired,
  onclickLoans: PropTypes.func.isRequired,
};

class Notifications extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    const loanBadge = (
      <Badge
        badgeContent={ this.props.newLoans }
        secondary
        badgeStyle={ { top: 20, right: 15 } }
        onClick={ this.props.onclickLoans }
      >
        <IconButton tooltip="Nuevas solicitudes préstamos">
          <NotificationsIcon />
        </IconButton>
      </Badge>
    );
    const investorBadge = (
      <Badge
        badgeContent={ this.props.newInvestors }
        primary
        badgeStyle={ { top: 20, right: 15 } }
        onClick={ this.props.onclickInvestors }
      >
        <IconButton tooltip="Nuevos inversionistas">
          <NotificationsIcon />
        </IconButton>
      </Badge>
    );
    const loansNotifications = this.props.newLoans ? loanBadge : '';
    const investorsNotifications = this.props.newInvestors ? investorBadge : '';
    return (
      <div>
				{ investorsNotifications }
        { loansNotifications }
      </div>
    );
  }
}

Notifications.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

Notifications.propTypes = propTypes;

export default connect()(Notifications);
