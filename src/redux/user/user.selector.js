import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUsers = createSelector(
  [selectUser], user => user.currentUser
)