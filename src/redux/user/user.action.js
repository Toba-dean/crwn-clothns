// ACTIONS ARE FUNCS THAT RETURN OBJECTS

import { userActionType } from "./user.type";

const { SET_CURRENT_USER } = userActionType

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})