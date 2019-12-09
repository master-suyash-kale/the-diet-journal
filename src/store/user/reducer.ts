import { USER_STATE, USER_ACTIONS } from 'store/user/index';
import { ACTION_USER_SIGN_IN, ACTION_USER_SIGN_IN_TYPE } from 'store/user/actions/signIn';
import { ACTION_USER_SIGN_OUT } from 'store/user/actions/signOut';

export function user(state: USER_STATE = null, action: USER_ACTIONS): USER_STATE {
	switch (action.type) {
		case ACTION_USER_SIGN_IN: {
			let { payload } = action as ACTION_USER_SIGN_IN_TYPE;
			return payload;
		}
		case ACTION_USER_SIGN_OUT: {
			return null;
		}
		default: {
			return state;
		}
	}
};