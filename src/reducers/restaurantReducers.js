const RestaurantReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [
        ...state,
        {
          id: uuid(),
          name: action.payload.name,
          location: action.payload.location,
          rating: action.payload.rating,
        },
      ];
  }
};
export { RestaurantReducer };
