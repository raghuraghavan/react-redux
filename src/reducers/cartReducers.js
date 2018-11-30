"use strict"

export function cartReducers (state = { carts: [] }, action){
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, 
                carts :action.payload,
                totalAmount : Totals(action.payload).amount,
                totalQty : Totals(action.payload).qty
            }
            break;    
        case "DELETE_CART_ITEM":
            return { ...state, carts: action.payload, totalAmount: Totals(action.payload).amount, totalQty: Totals(action.payload).qty }
            break;   
        case "UPDATE_CART_ITEM":
            const currentBookToUpdate = [...state.carts]
            const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
                return book._id === action._id
            })           
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            }

            let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
           
            return { ...state, carts: cartUpdate, totalAmount: Totals(cartUpdate).amount, totalQty: Totals(action.payload).qty }
            break;   
    }
    return state;
}

export function Totals(payloadArr) {
    
    const totalAmount = payloadArr.map(function(cartArr){
        return cartArr.price * cartArr.quantity
    }).reduce(function(a,b){
        return a + b
    },0)

    const totalQty = payloadArr.map(function (qty) {
        return qty.quantity
    }).reduce(function (a, b) {
        return a + b
    }, 0)

    return { amount : totalAmount.toFixed(2), qty : totalQty}
}