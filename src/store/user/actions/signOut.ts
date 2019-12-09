export const ACTION_USER_SIGN_OUT: string = 'USER_SIGN_OUT';
export type ACTION_USER_SIGN_OUT_TYPE = { type: string };

export function setUser(): ACTION_USER_SIGN_OUT_TYPE {
	return {
		type: ACTION_USER_SIGN_OUT
	};
};