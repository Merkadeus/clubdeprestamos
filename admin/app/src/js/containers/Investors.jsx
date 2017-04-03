import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DataTables from 'material-ui-datatables';
import {
	selectPage,
	setReadInvestors,
	setDataTableData,
	clearDataTableData,
} from '../actions';

const TABLE_COLUMNS = [
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Nombre', sortable: true },
	{ key: 'lastName', label: 'Apellido', sortable: true },
	{ key: 'cellphone', label: 'Celular', sortable: true },
	{ key: 'signupDate', label: 'Ingreso', sortable: true },
];

class Investors extends Component {
  constructor() {
    super();
		autobind(this);
		this.setState({
			tableColumns: {},
		});
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
	componentWillMount() {
		this.props.selectPage();
		this.props.setReadInvestors();
		this.setState({
			tableColumns: TABLE_COLUMNS,
		});
	}
	handleCellClick() {
		console.log('handleCellClick', arguments);
	}
	handleCellDoubleClick() {
		console.log('handleCellDoubleClick', arguments);
	}
	handleFilterValueChange(val) {
		const regExp = new RegExp(`^${_.lowerCase(val)}`);
		let results = _.map(Object.keys(this.props.investors[0]), (key, value) => {
			return _.filter(this.props.investors, (obj) => {
				return regExp.test(_.lowerCase(obj[key]));
			});
		});
		let finalResults = [];
		results = _.filter(results, (o) => o.length ? o : '');
		_.forEach(results, (value, key) => {
			finalResults = _.concat(finalResults, value);
		});
		this.props.clearDataTableData();
		this.props.setDataTableData(_.uniq(finalResults));
	}
	handleSortOrderChange(key, order) {
		this.props.setDataTableData(_.orderBy(this.props.tableData, [key], [order]));
	}
  render() {
    return (
			<div className="investors-page">
				<DataTables
					height={ 'auto' }
					selectable={ false }
					showRowHover
					showHeaderToolbar
					title="Lista de inversionistas"
					columns={ this.state.tableColumns }
					data={ this.props.tableData }
					showCheckboxes={ false }
					onCellClick={ this.handleCellClick }
					onCellDoubleClick={ this.handleCellDoubleClick }
					onFilterValueChange={ this.handleFilterValueChange }
					onSortOrderChange={ this.handleSortOrderChange }
					page={ 1 }
					count={ this.props.tableData.length }
				/>
			</div>
		);
  }
}

Investors.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		tableData: state.dataTableData.data,
		investors: state.investors.investors,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectPage() {
			return dispatch(selectPage('Inversionistas'));
		},
		setReadInvestors() {
      return dispatch(setReadInvestors());
    },
		setDataTableData(data) {
			return dispatch(setDataTableData(data));
		},
		clearDataTableData() {
			return dispatch(clearDataTableData());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Investors);
