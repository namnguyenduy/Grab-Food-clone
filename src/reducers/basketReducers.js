const BasketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [
        ...state,
        {
          id: uuid(),
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "REMOVE_FROM_BASKET":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
export { BasketReducer };
