import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer'
import { useLocation, useNavigate  } from 'react-router-dom';


const FilterContext = createContext()
const initialState = {
    filtered_products: [],
    all_products: [],
    sorting_value: "",
    items_per_page: 12,
    current_page: 1,
    products_to_display: [],
    filter: {
        category: ["All"],
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
    const location = useLocation();
    const navigate = useNavigate();


    // Sorting function
    const sorting = (event) => {
        let sortValue = event.target.value
        dispatch({type: 'SET_SORT_VALUE', payload: sortValue})
    }

    const constructUrl = () => {
        const { filter } = state
        const { price, category } = filter
        const { min, max} = price
        // Construct a new URL query string based on the updated filters
        const searchParams = new URLSearchParams(location.search);

        if (category.length && !category.includes('All')) {
            // Add the category to the query string
            searchParams.delete('category')
            searchParams.set('category', [... new Set(category)].join(','));
        } else if(category.includes('All')) {
            // Remove the category from the query string
            searchParams.delete('category');
        }

        if(min > 0 || max < 10000) {
            searchParams.delete('priceMin');
            searchParams.delete('priceMax');
            
            searchParams.set('priceMin', min);
            searchParams.set('priceMax', max);

        }else{
            searchParams.delete('priceMin');
            searchParams.delete('priceMax');
        }

        // Update the URL
        navigate(`?${searchParams.toString()}`);
    }


    // Function to parse and set filters based on URL parameters
    const setFiltersFromURL = () => {
        const searchParams = new URLSearchParams(location.search);
        const categories = searchParams.get("category")?.split(",") || ["All"];
        const priceMin = searchParams.get("priceMin") || 0;
        const priceMax = searchParams.get("priceMax") || 10000;
        const category = [...new Set(categories)]

        // Dispatch actions to set the initial filter state based on URL parameters
        category.forEach(c => {
            dispatch({ type: "SET_FILTER_BY_CATEGORY_VALUE", payload: { categoryName: c, checked: true } });
        })
        dispatch({ type: "SET_FILTER_BY_PRICE_VALUE", payload: { key: "min", value: priceMin } });
        dispatch({ type: "SET_FILTER_BY_PRICE_VALUE", payload: { key: "max", value: priceMax } });
    };


    // To filter & Sort the products.
    useEffect(() => {
        dispatch( { type: "FILTER_BY_CATEGORY" } )
        dispatch( { type: "FILTER_BY_PRICE" } )
        dispatch( { type: "FILTER_BY_RATINGS" } )
        dispatch( { type: "SORT_PRODUCTS" } )
        dispatch( { type: "PAGINATION" } )
        constructUrl()
        
    },[state.all_products, state.sorting_value, state.filter, products, state.current_page])


    // To filter products based on category
    const filterProductsBasedOnCategory = (event) => {
        let categoryName = event.target.value
        let checked = event.target.checked
        dispatch({type: "SET_FILTER_BY_CATEGORY_VALUE", payload: {categoryName, checked} })
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
        dispatch({ type: "SET_CURRENT_PAGE", payload: page })
    }

    useEffect(() => {
        dispatch({type: "INIT_PRODUCTS", payload: products})
        dispatch( { type: "PAGINATION" } )
        setFiltersFromURL()
    }, [products])
    return <FilterContext.Provider value={{...state, sorting, filterProductsBasedOnCategory, filterByRatings, filterByPrice, clearAll, jumpToNextPage }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}