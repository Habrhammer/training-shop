export const POST_FORM_REQUESTED = "POST_FORM_REQUESTED";
export const POST_FORM_FAILED = "POST_FORM_FAILED";
export const POST_FORM_SUCCESS = "POST_FORM_SUCCESS";

let initialState = {
  data: null,
  loading: false,
  formId: null
};

export const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_REQUESTED:
      return { ...state, loading: true };
    case POST_FORM_SUCCESS:
      return { ...state, data: action.data, loading: false, formId: action.formId };
    case POST_FORM_FAILED:
      return { ...state, data: action.error, loading: false };
    default:
      return state;
  }
};

export const submitForm = (data) => ({
  type: POST_FORM_REQUESTED,
  data,
});
