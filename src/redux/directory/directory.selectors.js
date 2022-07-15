import { createSelector } from 'reselect';

// get the state from the root reducer
const selectDirectory = state => state.directory;

// get the sections from the directory object.
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);