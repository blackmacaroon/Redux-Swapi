import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('my reducer', action)
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        characters: [...state.characters, action.payload]
      };
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload 
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
