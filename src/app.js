"use strict"
// MIDDLEWARE for displaying the state.
import { logger } from 'redux-logger'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// IMPORT COMBINE REDUCERS
import reducers from './reducers/index'
//IMPORT ACTIONS
import { addToCart } from "./actions/cartActions";
import { addBooks, updateABook, deleteABook } from "./actions/booksActions";
// IMPORT COMPONENTS, PAGES
import BooksList from './components/pages/booksList'




// STEP 1 --> CREATE THE STORE and APPLYING MIDDLEWARE
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)))

render(
    <Provider store={store}>       
            <BooksList />       
    </Provider>, 
    document.getElementById('app')
)

// // STEP 2 --> CREATE AND DISPATCH ACTIONS
// store.dispatch(addBooks([
//     {
//         id: 1,
//         title: 'React development series - 1',
//         description: 'React Development series - 1',
//         price: 32.00
//     },
//     {
//         id: 2,
//         title: 'React development series - 2',
//         description: 'React Development Series - 2',
//         price: 45.99
//     }
// ]))

// // DISPATCH ANOTHER BOOK
// // as the store is defined in array type, we need to send the payload as array object not as direct json object
// store.dispatch(addBooks([
//     {
//         id: 3,
//         title: 'React development series - 3',
//         description: 'React Development Series - 3',
//         price: 59.99
//     }]
// ))

// //DISPATH AN ACTION TO UPDATE A BOOK
// store.dispatch(updateABook({
//     id: 2,
//     title: "Learn React in 24 Hours",
//     description: "Learn React Application Development in 24 Hours"
// }))

// // DISPATH AN ACTION TO DELETE A BOOK
// store.dispatch(deleteABook({id : 1}))

// // -->> CART ACTIONS <<--
// //ADD to CART
// store.dispatch(addToCart([{id:1}]))

