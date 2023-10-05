const FilterReducer = (state, action) => {
    /**
     * Code for sorting all the products globally.
     */
    
    /**
     * End sorted code here.
     */

    switch (action.type) {
        case "INIT_PRODUCTS":
            return {
                ...state,
                filtered_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_SORT_VALUE" :
            return {
                ...state,
                sorting_value: action.payload,
                filter: {
                    ...state.filter,
                    ratings: ""
                }
            }
        

        case "SET_FILTER_BY_CATEGORY_VALUE" : {
            return {
                ...state,
                current_page: 1, // for setting the page to 1 while products are filtered by category.
                filter: {
                    ...state.filter,
                    category: action.payload
                }
            }
        }
        
        case "FILTER_BY_CATEGORY" : 
        {
            let { all_products, filter } = state
            const { category } = filter
            const sortProductsData = [...all_products]
            const filtered_products_based_on_category = category == 'All' ? sortProductsData : sortProductsData.filter(fp => fp.category == category)
            
            return {
                ...state,
                filtered_products: filtered_products_based_on_category,
            }
        }

        case "SET_FILTER_BY_RATINGS_VALUE":
            return {
                ...state,
                current_page: 1, // for setting the page to 1 while products are filtered by ratings.
                filter: {
                    ...state.filter,
                    ratings: action.payload
                }

            }

        case "FILTER_BY_RATINGS":{
                    let { filtered_products, filter } = state
                    const { ratings } = filter
                    const filterProductsData = [...filtered_products]
                    const filtered_data = ratings == 'high' ? filterProductsData.sort((a, b) => a.rating - b.rating) : ( ratings == 'low' ? filterProductsData.sort((a, b) => b.rating - a.rating) : filterProductsData )
                    return {
                        ...state,
                        filtered_products: filtered_data,
                    }
    
                }
        
        case "SORT_PRODUCTS" :
            const sortByPrice = (a, b) => {
                if(sorting_value === 'lowest') {
                    return a.price - b.price
                }
                if(sorting_value === 'highest') {
                    return b.price - a.price
                }
                if(sorting_value === 'a-z'){
                    return a.title.localeCompare(b.title) 
                }
                if(sorting_value === 'z-a'){
                    return b.title.localeCompare(a.title) 
                }
            }
            let sortProductsData
            const { filtered_products, sorting_value } = state
            const products = [...filtered_products]
            sortProductsData = products.sort(sortByPrice)
            return {
                ...state,
                filtered_products : sortProductsData,
            }
        
        case "SET_FILTER_BY_PRICE_VALUE" : {
            const { key, value } = action.payload
            // if(key === 'min' && state.filter.price.max < value) {
            //     return {...state}
            // }
            return {
                ...state,
                current_page: 1, // for setting the page to 1 while products are filtered by ratings.
                filter: {
                    ...state.filter,
                    price: {
                        ...state.filter.price,
                       [key] : value
                    }
                }
            }
        }

        case "FILTER_BY_PRICE": {
            let { filtered_products, filter } = state
            let { price } = filter
            let { min, max } = price
            const filteredData = [...filtered_products]
            const filtered = filteredData.filter(p => p.price >= min && p.price <= max)
            
            return {
                ...state,
                filtered_products: filtered
            }
        }

        case "PAGINATION": {
            let { filtered_products, current_page, items_per_page } = state
            const filteredData = [...filtered_products]
            const startIndex = (current_page - 1) * items_per_page;
            const endIndex = startIndex + items_per_page;
            const productsToDisplay = filteredData.slice(startIndex, endIndex);
            return {
                ...state,
                products_to_display: productsToDisplay
            }
        }

        case "SET_CURRENT_PAGE": {
            console.log(action.payload)
            return {
                ...state,
                current_page: action.payload
            }
        }
        
        case "CLEAR_ALL" : {

            return {
                ...action.payload,
                all_products: state.all_products,
                filtered_products: state.all_products,

            }
        }
    
        default:
            return state
    }
}

export default FilterReducer