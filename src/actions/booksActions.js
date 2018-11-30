import { booksReducers } from "../reducers/booksReducers";

"use strict"

export function getBooks(){
    return {
        type : "GET_BOOKS"
    }
}

//POST A BOOK
export function addBooks(book) {
    return {
        type: "ADD_A_BOOK",
        payload : book
    }
}


// DELETE A BOOK
export function deleteABook(_id) {
    return {
        type: "DELETE_A_BOOK",
        payload : _id
    }
}


// UPDATE A BOOK
export function updateABook(book) {
    return {
        type: "UPDATE_A_BOOK",
        payload : book
    }
}
