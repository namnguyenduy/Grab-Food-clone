const SignInReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        userToken: action.payload.userToken,
      };
    default:
      return state;
  }
};
export { SignInReducer };
