const ProductReducer = (state, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        
        case 'API_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        
        case 'ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isError: false
            }
    
        default:
            return state
    }
}
export default ProductReducer
