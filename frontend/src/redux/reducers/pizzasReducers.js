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
        // case "FILTERPACKS":
        //         let filter = state.filterPacks.filter(pack => pack.Precio < action.payload)   
        //         // console.log("ACTION.PAYLOAD", action.payload);    
        //         // console.log("FILTER", filter) 
        //     return{
        //         ...state,
        //         filterPacks: filter
        //     }
        default:
            return state
    }
}

export default pizzasReducers