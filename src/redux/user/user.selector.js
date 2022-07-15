import { createSelector } from "reselect";

// get the state from the root reducer
const selectUser = state => state.user;

// select currentUser prop from the user state object
export const selectCurrentUsers = createSelector(
  [selectUser], user => user.currentUser
)