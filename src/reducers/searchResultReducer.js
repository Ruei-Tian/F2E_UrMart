// Actions
const ADD_RESULTS = 'ADD_RESULTS';
const CLEAR_RESULTS = 'CLEAR_RESULTS';

// Action Creators
export function addResults(keyword, results) {
  return {
    type: ADD_RESULTS,
    keyword,
    results,
  };
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS,
  };
}

const initialState = {
  results: [],
};

// Reducer
export default function searchResultReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RESULTS':
      return { ...state, results: [...state.results, ...action.results] };

    case 'CLEAR_RESULTS':
      return { ...state, results: [] };

    default:
      return state;
  }
}
