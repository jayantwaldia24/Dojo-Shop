export const productReducer = (data, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return action.payload.sort((el1, el2) => el1.price - el2.price);
    default:
      return data;
  }
};
