const initialState = {
    products: [],
    onePizza: []
}

const cartShopPizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRO':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_ONE':
            return {
                ...state,
                onePizza: action.payload
            }
        default:
            return state
    }
}
export default cartShopPizzas