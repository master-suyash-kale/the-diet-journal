import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { BASE_ROUTER_PATH } from 'configs/path';

import Routes from 'components/routes/Index';


const App: React.FC = () => {
  return (<Router basename={BASE_ROUTER_PATH}>
    <Routes />
  </Router>);
}

export default App;