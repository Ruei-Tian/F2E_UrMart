// Actions
const ADD_RECORD = 'ADD_RECORD';
const CLEAR_RECORD = 'CLEAR_RECORD';

// Action Creators
export function addRecord(keyword, results) {
  return {
    type: ADD_RECORD,
    keyword,
    result: results,
  };
}

export function clearRecord() {
  return {
    type: CLEAR_RECORD,
  };
}

const initialState = {
  record: [],
};

// Reducer
export default function searchRecordReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECORD':
      return { ...state, record: [...state.record, ...action.result] };

    case 'CLEAR_RECORD':
      return { ...state, record: [] };

    default:
      return state;
  }
}
