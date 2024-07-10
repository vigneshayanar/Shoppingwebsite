import { faker } from '@faker-js/faker';
import React, { children, createContext, useContext } from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import Reducers from './Reducers.jsx'; 
import { filterReducer } from './filterreducer.jsx';
export const Cart=createContext();

faker.seed(99)
const Context = ({children}) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byRating: 0,
    searchQuery:"",
    sort:"",
    category: ""
});
    const [cartItems, setCartItems] = useState([]);
    const fakeData = Array.from({ length: 500 }, () => ({

      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      fastDelivery:faker.datatype.boolean(),
      avatar: faker.image.urlLoremFlickr({category:"home"}),
      instock:faker.number.int({ min: 0, max: 5 }),
      rating:faker.number.int({ min: 1, max: 5 })

    }));
    const [state,dispatch]=useReducer(Reducers,{
      product:fakeData,
      cart:[],
    })
  return (
    <Cart.Provider value={{state,dispatch,filterState, filterDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const cartstate=()=>{
  return useContext(Cart)
}

