import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import { REDUCERS } from 'store/reducers';
import { USER_STATE } from 'store/user/index';
import history from 'utils/history';
import store from 'store/index';

import Header from 'components/common/Header';
import SignIn from 'components/routes/signIn/Index';
import SignUp from 'components/routes/signUp/Index';
import Dashboard from 'components/routes/dashboard/Index';


export interface Props {
  user: USER_STATE
};

const Routes: React.FC<Props> = ({ user }) => {
  return (<ConnectedRouter
    history={history}
    store={store}>
    <Fragment>

      <Header />

      <Switch>

        <Route
          path={'/'}
          component={SignIn}
          exact={true}
        />

        <Route
          path={'/SignIn'}
          component={SignIn}
          exact={true}
        />

        <Route
          path={'/SignUp'}
          component={SignUp}
          exact={true}
        />

        <Route
          path={'/Dashboard'}
          component={Dashboard}
          exact={true}
        />

      </Switch>
    </Fragment>
  </ConnectedRouter>);
};

export default connect(
  ({ user }: REDUCERS)=> ({ user })
)(Routes);