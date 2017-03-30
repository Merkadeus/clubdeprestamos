import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Notifications from '../components/Notifications';
import SecondaryAppBar from '../components/SecondaryAppBar';
import { setReadInvestors, setReadLoans } from '../actions';

class Dashboard extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  componentWillMount() {
    if (!sessionStorage.getItem('auth')) {
      browserHistory.push('/');
    }
  }
  render() {
    const contentAppBar = (
      <Notifications
        newInvestors={ this.props.newInvestors }
        onclickInvestors={ () => this.props.setReadInvestors() }
        newLoans={ this.props.newLoans }
        onclickLoans={ () => this.props.setReadLoans() }
      />
    );
    return (
      <div className="dashboard-page">
        <SecondaryAppBar
          title="Dashboard"
          content= { contentAppBar }
        />
        <div className="breadcrumbs">
          <ul>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>
    );
  }
}

Dashboard.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.user.auth,
    newInvestors: state.investors.pending,
    newLoans: state.loans.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setReadInvestors() {
      return dispatch(setReadInvestors());
    },
    setReadLoans() {
      return dispatch(setReadLoans());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
