import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { reducers } from 'store/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk,routerMiddleware(createBrowserHistory()))));

export default store;