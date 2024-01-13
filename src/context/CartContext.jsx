import React, { createContext, useState } from 'react'

const Context = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newObj = {
            ...productToAdd,
            quantity
        }
        setCart([newObj])
    };

    console.log(cart);

    return (
        <Context.Provider value={{cart, setCart, addItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context