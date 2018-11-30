"use strict"

//BOOKS REDUCERS
export function booksReducers (state = { 
    books: [
        {
            __id: 1,
            title: 'React development series - 1',
            description: 'React Development series - 1',
            price: 32.00
        },
        {
            _id: 2,
            title: 'React development series - 2',
            description: 'React Development Series - 2',
            price: 45.99
        },
        {
            __id: 3,
            title: 'React development series - 3',
            description: 'React Development Series - 3',
            price: 59.99
        }
    ]
}, action) {
    switch (action.type) {

        case "GET_BOOKS":
            return{...state, books:[...state.books]}
        break;
        case "INITAL_LOAD":
            // let books = state.books.concat(action.payload);
            // return {books};
            // same code can be written with spread operator. which does the same operation.
            return { books: [...state.books, ...action.payload] }
            break;
        case "ADD_A_BOOK":
            //returning an object, if we return state as it, we will get an error of state.books is undefined. use {<<object>>} is advisable.
            // let addAbook = state.books.concat(action.payload);
            // return {addAbook};            
            // <!-- refer to the comment in the above case statement 
            return { books: [...state.books, ...action.payload] }
            break;
        case "DELETE_A_BOOK":
            // create an copy of the current array of books
            const currentBookToDelete = [...state.books];
            // Determine at which index in book array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(function (book) {
                return book._id === action.payload._id
            })
            // use slice to remove the book at the specified index
            return { books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)] }
            break;
        case "UPDATE_A_BOOK":
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
                return book._id === action.payload._id
            })
            // Create a new book object with the values and with same array index of the item we want to replace. To achive this we will use ...spread but we could use concat method as well. 
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title,
                description: action.payload.description
            }
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
            break;
    }
    return state;
}