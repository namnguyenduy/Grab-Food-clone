import React, { createContext, useReducer } from "react";
import { SignInReducer } from "../reducers/authReducers";

const SignInContext = createContext();

const SignInContextProvider = (props) => {
  const [signIn, dispatchSignedIn] = useReducer(SignInReducer, {
    userToken: null,
    user: {
      email: null,
      displayName: null,
      photoURL: null,
      phone: null,
      address: null,
    },
  });
  return (
    <SignInContext.Provider value={{ signIn, dispatchSignedIn }}>
      {props.children}
    </SignInContext.Provider>
  );
};

export { SignInContext, SignInContextProvider };
