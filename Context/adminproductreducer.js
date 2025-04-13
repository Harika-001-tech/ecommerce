const Adminproductreducer = (state, action) => {
    switch (action.type) {
        case "ADMIN_API_GET_PRODUCT_LOADING":
            return {
                ...state,
                isLoading: true,
                isError: false,  
            };

        case "ADMIN_SET_PRODUCT_DATA":
            return {
                ...state,
                isLoading: false,
                adminproduct: action.payload,
                isError: false,  
            };

        case "ADMIN_GET_PRODUCT_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload || "An error occurred while fetching products.",  // Capture error message
            };

        default:
            return state;
    }
};

export default Adminproductreducer;
