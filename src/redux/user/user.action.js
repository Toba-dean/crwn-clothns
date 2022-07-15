// ACTIONS ARE FUNCS THAT RETURN OBJECTS

import { userActionType } from "./user.type";

const { SET_CURRENT_USER } = userActionType

// dispatch the user
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})