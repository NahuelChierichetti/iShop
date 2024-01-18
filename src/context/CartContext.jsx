import { createContext, useState } from 'react'

const Context = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newObj = {
            ...productToAdd,
            quantity,
        };

        if (isInCart(newObj.id, newObj.color)) {
            const updateCart = cart.map((el) => {
            if (el.id === newObj.id && el.color === newObj.color) {
                el.quantity += newObj.quantity;
            }
            return el;
            });
            setCart(updateCart);
        } else {
            setCart([...cart, newObj]);
        }
    };

    const isInCart = (id, color) => {
        return cart.some((elem) => elem.id === id && elem.color === color);
      };

    const getTotalProduct = () => {
        const totalProduct = cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalProduct;
    };

    const getTotal = () => {
        const total = cart.reduce((acumulador, item) => acumulador + item.precio * item.quantity, 0)
        return total
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((elem) => elem.id !== id)
        setCart([...deleteItem])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <Context.Provider value={{cart, setCart, addItem, getTotalProduct, getTotal, removeItem, clearCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context