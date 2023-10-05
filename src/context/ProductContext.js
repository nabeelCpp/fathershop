import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer'

const AppContext = createContext()
const API = 'https://dummyjson.com/products'
const initialState = {
    isLoading: false,
    isError: false,
    products: []
} 


const AppProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({
            type: "SET_LOADING"
        })
        try {
            const res = await axios.get(`${url}?limit=0`) // To get all the data at once
            const products = await res.data.products
            
            dispatch({
                type: "ALL_PRODUCTS",
                payload: products
            })
        } catch (error) {
            dispatch({
                type: "API_ERROR"
            })
        }
    }
    useEffect(() => {
        getProducts(API)
    }, [])
    return <AppContext.Provider value={{...state}} >{ children }</AppContext.Provider>
}

/**
 * Create custom global hook
 */
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }