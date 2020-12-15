import { NUMBER_MAX_CHANGED, NUMBER_MIN_CHANGED } from '../actions/actionTypes';

const initialState = {
  min: 1,
  max: 10
}

export default function(state = initialState, action) {
    
  switch(action.type) {
    case NUMBER_MIN_CHANGED:
      return {
        ...state,
        min: action.payload
      }

    case NUMBER_MAX_CHANGED:
      return {
        ...state,
        max: action.payload
      }

    default: 
      return state 
  }
}