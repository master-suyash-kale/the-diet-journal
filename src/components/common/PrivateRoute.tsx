import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { REDUCERS } from 'store/reducers';
import { USER_STATE } from 'store/user/index';
import { PRIVATE_REDIRECT } from 'configs/path';

export interface Props {
    component: any,
    path: string,
    user: USER_STATE
};
  
const PrivateRoute: React.FC<Props> = ({ component: Component, path, user }) => {
    return (<Route
        path={path}
        render={props=>
            user ?
                <Component user={user} {...props} /> :
                <Redirect
                    to={{
                        pathname: PRIVATE_REDIRECT,
                        state: {
                            from: props.location
                        }
                    }}
                />
        }
    />);
};

export default connect(
    ({ user }: REDUCERS)=> ({ user })
  )(PrivateRoute);