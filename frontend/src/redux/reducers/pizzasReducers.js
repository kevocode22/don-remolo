const initialState = {
    pizzas: [],
    getOnePizza: []
}

const pizzasReducers = (state = initialState, action) => {

    switch (action.type) {
        case "GETPIZZAS":
            return {
                ...state,
                pizzas: action.payload,
            }
        case "GETONEPIZZA":
            return {
                ...state,
                getOnePizza: action.payload
            }
        default:
            return state
    }
}

export default pizzasReducers