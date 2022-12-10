const SignInReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        userToken: action.payload.userToken,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        userToken: null,
        user: null,
      };
    default:
      return state;
  }
};
export { SignInReducer };
