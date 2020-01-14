import React from 'react';
import Routes from './../../routes';
import DevTools from './devTools';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'

const App = props => {
  return (
    <div>
      <Routes />
      <DevTools />
    </div>
  );
};

export default App;
