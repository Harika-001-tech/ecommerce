const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featData = action.payload.filter((currele) => {
        return currele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,  // Optional: Add error message for clarity
      };

    case "SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false, // Fix: Change to `isSingleLoading: false`
        singleproduct: action.payload,
      };

    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
        singleProductErrorMessage: action.payload, // Optional: Store error message for single product
      };

    case "CURR_LOADING":
      return {
        ...state,
        isCurrloading: true,
      };

    case "SET_CURR_USER":
      return {
        ...state,
        isCurrloading: false,
        user: action.payload,
      };

    case "CURR_ERROR":
      return {
        ...state,
        isCurrloading: false,
        isError: true,
        currUserErrorMessage: action.payload,  // Optional: Store error message for current user
      };

    default:
      return state;
  }
};

export default ProductReducer;
