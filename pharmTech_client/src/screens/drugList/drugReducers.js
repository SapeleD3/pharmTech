import {
  ADD_DRUG,
  GET_DRUG,
  SET_DRUG,
  UPDATE_DRUG_STATUS,
} from './drugActionType';

const INITIAL_STATE = {
  error: {},
  drug: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DRUG: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_DRUG: {
      return {
        ...state,
        drug: action.payload,
        loading: false,
      };
    }
    case ADD_DRUG: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_DRUG_STATUS: {
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
