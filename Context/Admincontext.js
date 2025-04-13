import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from './adminproductreducer';


const AdminAPi = "http://localhost:4000/admin-all-data";


const Admincontext = createContext();


const initialState = {
    isLoading: false,
    adminproduct: [],
    isError: false,
    errorMessage: '',  
};


const ADMIN_API_GET_PRODUCT_LOADING = "ADMIN_API_GET_PRODUCT_LOADING";
const ADMIN_SET_PRODUCT_DATA = "ADMIN_SET_PRODUCT_DATA";
const ADMIN_GET_PRODUCT_ERROR = "ADMIN_GET_PRODUCT_ERROR";


const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    
    const GetAdminData = async (url) => {
        dispatch({ type: ADMIN_API_GET_PRODUCT_LOADING });

        const token = localStorage.getItem("x-auth-token");

        try {
            const response = await axios.get(url, {
                headers: {
                    'x-auth-token': token,
                },
            });

            
            dispatch({ type: ADMIN_SET_PRODUCT_DATA, payload: response.data });
        } catch (e) {
            console.error("Error fetching data: ", e);
            dispatch({ type: ADMIN_GET_PRODUCT_ERROR, payload: e.message || "An error occurred" });
        }
    };

    useEffect(() => {
        GetAdminData(AdminAPi);
    }, []);  

    return <Admincontext.Provider value={{ ...state }}>{children}</Admincontext.Provider>;
};

export { AdminProvider, Admincontext };
