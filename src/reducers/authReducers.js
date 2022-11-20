const SignInReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        userToken: action.payload.userToken,
      };
    case "SIGN_OUT":
      return {
        userToken: null,
      };
    default:
      return state;
  }
};
export { SignInReducer };
