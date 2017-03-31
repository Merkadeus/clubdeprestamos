import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Notifications from '../components/Notifications';
import SecondaryAppBar from '../components/SecondaryAppBar';
import InfoBox from '../components/InfoBox';
import { cyan500, pink600, green500 } from 'material-ui/styles/colors';
import { setReadInvestors, setReadLoans } from '../actions';

class Dashboard extends Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  componentWillMount() {
    if (!sessionStorage.getItem('auth') && !this.props.auth) {
      browserHistory.push('/');
    }
  }
	componentWillReceiveProps(nextProps) {
		if (!sessionStorage.getItem('auth') && !this.props.auth) {
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
		const infoBoxesData = [
			{
				icon: 'fa-university',
				color: cyan500,
				title: 'Inversionistas',
				content: '500',
				goTo: '/investors',
			},
			{
				icon: 'fa-money',
				color: pink600,
				title: 'Clientes',
				content: '500',
				goTo: '/loans',
			},
			{
				icon: 'fa-bar-chart',
				color: green500,
				title: 'Reportes',
				content: '',
				goTo: '/investors',
			},
		];
		const infoBoxes = infoBoxesData.map((box, index) => {
			return (
				<InfoBox
					key={ index }
					icon={ box.icon }
					color={ box.color }
					title={ box.title }
					content={ box.content }
					goTo={ box.goTo }
				/>
			);
		});
    return (
      <div className="dashboard-page">
        <SecondaryAppBar title="Dashboard" content= { contentAppBar } />
				<div className="info-boxes">{ infoBoxes }</div>
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
