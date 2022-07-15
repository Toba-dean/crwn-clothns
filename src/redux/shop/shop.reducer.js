import { shopActionTypes } from './shop.types.js';

const INITIAL_STATE = {
  collections: null,
}

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  } 
}