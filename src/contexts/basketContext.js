import React, { createContext, useReducer } from "react";
import { BasketReducer } from "../reducers/basketReducers";

const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const initialState = {
    items: [],
  };
  const [basketState, dispatchBasket] = useReducer(BasketReducer, initialState);
  return (
    <BasketContext.Provider value={{ basketState, dispatchBasket }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketContextProvider };
