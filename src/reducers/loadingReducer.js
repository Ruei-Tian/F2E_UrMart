// Actions
const SET_LOADING = 'SET_LOADING';

// Actions Creators
export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}

const initialState = {
  isLoading: false,
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
}
