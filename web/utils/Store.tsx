"use client";

import { createContext, useReducer } from 'react';

export type GlobalContent = {
  
}

//@ts-ignore
export const Store = createContext();

export const CART_ADD_ITEM = "CART_ADD_ITEM";

const initialState = {
  cart : { mangosInCart: []},
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const newItem = action.payload;
      const existItem = state.cart.mangosInCart.find(
        (item: any) => item.name === newItem.name
      );

      const cartItems = existItem 
      ? state.cart.mangosInCart.map((item: any) => 
          item.name === existItem.name ? newItem : item)
      : [...state.cart.mangosInCart, newItem]; //I don't like this code, might rewrite...
      
      return {...state, cart: { ...state.cart, cartItems }};
    }

    default:
      return state;
  }
}

export const StoreProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  //@ts-ignore  we should probably fix this later....
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

