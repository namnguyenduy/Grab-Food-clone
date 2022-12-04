import React, { createContext, useReducer } from "react";
import { RestaurantReducer } from "../reducers/restaurantReducers";

const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const initialState = {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  };
  const [restaurantState, dispatchRestaurant] = useReducer(
    RestaurantReducer,
    initialState
  );
  return (
    <RestaurantContext.Provider value={{ restaurantState, dispatchRestaurant }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantContextProvider };
