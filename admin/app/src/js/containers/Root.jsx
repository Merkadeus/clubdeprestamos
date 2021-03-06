import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function Root({ store, history }) {
  return (
    <div>
      <Provider store={ store }>
        <div>
          <Router history={ history } routes={ routes } />
        </div>
      </Provider>
    </div>
    );
}

Root.propTypes = propTypes;

export default Root;
