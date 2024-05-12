import actionsTypes from "../actionTypes/jobDetails";

const initialState = () => {
    return {
      jobDetails: [],
      jobDetailsSpinner: false,
    };
  };


export default function MyJobDetails(state = initialState(), action = {}) {
    const { type, payload } = action;
    switch (type) {
      case actionsTypes.FETCH_JOB_DETAILS_REQUEST: {
        return {
          ...state,
          jobDetailsSpinner: true,
        };
      }
      case actionsTypes.FETCH_JOB_DETAILS_SUCCESS: {
        return {
          jobDetails: payload,
          jobDetailsSpinner: false,
        };
      }
      case actionsTypes.FETCH_JOB_DETAILS_FAILURE: {
        return {
          ...state,
          jobDetailsSpinner: false,
        };
      }
    //   case actionTypes.CLEAR_JOB_DETAILS: {
    //     return {
    //       ...state,
    //       jobDetailsSpinner: false,
    //       jobDetails: [],
    //     };
    //   }
  
      default:
        return { ...state };
    }
  }
  