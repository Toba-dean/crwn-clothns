import { userActionType } from "./user.type";

// initial state of the user
const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  const { SET_CURRENT_USER } = userActionType
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}