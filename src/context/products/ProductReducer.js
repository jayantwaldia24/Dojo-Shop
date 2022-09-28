export const productSortReducer = (data, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return [...action.payload.sort((el1, el2) => el1.price - el2.price)];
    case "HIGH_TO_LOW":
      return [...action.payload.sort((el1, el2) => el2.price - el1.price)];
    case "BEST_RATING":
      return [
        ...action.payload.sort(
          (el1, el2) => el2.reviews.average - el1.reviews.average
        ),
      ];
    default:
      return data;
  }
};

export const productFilterReducer = (data, action) => {
  switch (action.type) {
    case "FILTER_MEN":
      console.log("heheh");
      return [
        ...action.payload.filter((product) => product.category === "men"),
      ];
  }
};
