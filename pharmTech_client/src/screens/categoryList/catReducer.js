import {
  ADD_CAT,
  GET_CAT,
  SET_CAT,
  UPDATE_CAT_STATUS,
} from './categoryActionTypes';

const INITIAL_STATE = {
  error: {},
  category: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CAT: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_CAT: {
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    }
    case ADD_CAT: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_CAT_STATUS: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
