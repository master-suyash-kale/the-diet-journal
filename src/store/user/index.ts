import { USER } from 'interfaces/user';
import { ACTION_USER_SIGN_IN_TYPE } from 'store/user/actions/signIn';
import { ACTION_USER_SIGN_OUT_TYPE } from 'store/user/actions/signOut';

export type USER_STATE = USER | null;

export type USER_ACTIONS = 
    ACTION_USER_SIGN_OUT_TYPE |
    ACTION_USER_SIGN_IN_TYPE;