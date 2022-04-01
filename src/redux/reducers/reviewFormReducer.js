export const REVIEW_FORM_REQUESTED = "REVIEW_FORM_REQUESTED";
export const REVIEW_FORM_FAILED = "REVIEW_FORM_FAILED";
export const REVIEW_FORM_SUCCESS = "REVIEW_FORM_SUCCESS";

export const reviewFormReducer = (
  state = { loading: false, data: null, error: false },
  action
) => {
  switch (action.type) {
    case REVIEW_FORM_REQUESTED:
      return { ...state, loading: true };
    case REVIEW_FORM_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case REVIEW_FORM_FAILED:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};
