import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext()
const initialState = {
    filtered_products: [],
    all_products: [],
    sorting_value: "",
    items_per_page: 12,
    current_page: 1,
    products_to_display: [],
    filter: {
        category: "All",
        ratings: "",
        price: {
            min: 0,
            max: 10000
        }
    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // Sorting function
    const sorting = (event) => {
        let sortValue = event.target.value
        dispatch({type: 'SET_SORT_VALUE', payload: sortValue})
    }


    // To filter & Sort the products.
    useEffect(() => {
        dispatch( { type: "FILTER_BY_CATEGORY" } )
        dispatch( { type: "FILTER_BY_PRICE" } )
        dispatch( { type: "FILTER_BY_RATINGS" } )
        dispatch( { type: "SORT_PRODUCTS" } )
        dispatch( { type: "PAGINATION" } )
    },[state.sorting_value, state.filter, products, state.current_page])


    // To filter products based on category
    const filterProductsBasedOnCategory = (event) => {
        let category = event.target.value
        dispatch({type: "SET_FILTER_BY_CATEGORY_VALUE", payload: category})
    }

    // Filter By ratings
    const filterByRatings = (event) => {
        let value = event.target.value
        dispatch({type: "SET_FILTER_BY_RATINGS_VALUE", payload: value})
    }

    // Filter By Price range
    const filterByPrice = (event) => {
        let value = event.target.value
        let key = event.target.name
        dispatch({ type: "SET_FILTER_BY_PRICE_VALUE", payload: { key, value } })
    }

    // clear all filters
    const clearAll = () => {
        dispatch({type: 'CLEAR_ALL', payload: initialState})
    }

    // jump to next page in pagination
    const jumpToNextPage = (event) => {
        let page = event.target.value
        console.log(page)
        dispatch({ type: "SET_CURRENT_PAGE", payload: page })
    }

    useEffect(() => {
        dispatch({type: "INIT_PRODUCTS", payload: products})
    }, [products])
    return <FilterContext.Provider value={{...state, sorting, filterProductsBasedOnCategory, filterByRatings, filterByPrice, clearAll, jumpToNextPage }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}