import { USER_STATE } from 'store/user/index';

export const ACTION_USER_SIGN_IN: string = 'ACTION_USER_SIGN_IN';
export type ACTION_USER_SIGN_IN_TYPE = { type: string, payload: USER_STATE };

export function signIn(payload: USER_STATE): ACTION_USER_SIGN_IN_TYPE {
	return {
		type: ACTION_USER_SIGN_IN,
		payload
	};
};