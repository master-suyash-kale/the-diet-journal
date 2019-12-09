import { combineReducers, Reducer } from 'redux';

import { user } from 'store/user/reducer';
import { USER_STATE } from 'store/user/index';

export interface REDUCERS {
	user: USER_STATE
};

export const reducers: Reducer<REDUCERS> = combineReducers<REDUCERS>({
	user
});