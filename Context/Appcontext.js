import axios from "axios";
import { createContext, useEffect, useReducer, useCallback } from "react";
import reducer from './productreducer';

const Appcontext = createContext();
const API = "http://localhost:4000/get-user-all-product";
const GetUserApi = "http://localhost:4000/get-curr-user";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleproduct: {},
    isCurrloading: false,
    user: {}
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const token = localStorage.getItem("x-auth-token");

    
    const getProduct = useCallback(async (url) => {
        dispatch({ type: "API_LOADING" });
        try {
            const response = await axios.get(url, {
                headers: { 'x-auth-token': token },
            });
            dispatch({ type: "SET_API_DATA", payload: response.data });
        } catch (error) {
            console.error(error);
            dispatch({ type: "API_ERROR", payload: error.message || "Failed to fetch products" });
        }
    }, [token]); 

    
    const currUser = useCallback(async () => {
        dispatch({ type: "CURR_LOADING" });
        try {
            const response = await axios.get(GetUserApi, {
                headers: { 'x-auth-token': token }
            });
            dispatch({ type: "SET_CURR_USER", payload: response.data });
        } catch (error) {
            console.error(error.response?.data || error);
            dispatch({ type: "CURR_ERROR", payload: error.response?.data || "Failed to fetch user" });
        }
    }, [token]); // Add 'token' as a dependency

    // Fetch single product by ID
    const getSingleProduct = useCallback(async (url) => {
        dispatch({ type: "SINGLE_PRODUCT_LOADING" });
        try {
            const response = await axios.get(url);
            dispatch({ type: "SET_SINGLE_DATA", payload: response.data });
        } catch (error) {
            console.error(error);
            dispatch({ type: "SINGLE_PRODUCT_ERROR", payload: error.message || "Failed to fetch product" });
        }
    }, []); // No dependencies required

    useEffect(() => {
        getProduct(API);
    }, [getProduct]); // Correctly include 'getProduct' as a dependency

    return (
        <Appcontext.Provider value={{ ...state, getSingleProduct, currUser }}>
            {children}
        </Appcontext.Provider>
    );
};

export { AppProvider, Appcontext };
