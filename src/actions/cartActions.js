"use strict"

// ADD TO CART

export function addToCart(book){
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}

// DELTE CART ITEM
export function deleteCartItem(cart) {
    return {
        type: "DELETE_CART_ITEM",
        payload: cart
    }
}

// UPDATE CART ITEM
export function updateCartItem(_id, unit) {
    return {
        type: "UPDATE_CART_ITEM",
        _id : _id,
        unit : unit
    }
}