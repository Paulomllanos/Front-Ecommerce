const cartReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "SET_CART_ITEMS":
            return {...state, ...payload};
        case "SET_IS_CART_OPEN":
            return {...state, isCartOpen: payload}
        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export default cartReducers