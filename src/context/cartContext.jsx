import { createContext, useEffect, useState } from 'react'
import CatalogoJson from '../data/catalogo.json'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [counter, setCounter] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const addItem = (item) => {
        const isInCart = CatalogoJson.some(product => product.id === item.id)
        if (!isInCart) {
            //Agrega un nuevo producto al carrito
            const enterItem = {
            item: {
                ...item
            },
            quantity: quantity
            }
            setCart([...cart, enterItem])

        } else {
            cart.forEach(product => {
                if (product.id === item.id) {
                    return product.quantity += quantity
                }
            })
            setCart([...cart])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id)
        setCart(filteredCart)
    }

    const cartCounter = () => {
        let total = 0
        if (cart.length > 0) {
            cart.forEach((item) => { total += item.quantity })
        }
        setCounter(total)
    }
    useEffect(() => {
        cartCounter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])
    
    console.log(`en context: ${cart.length}`)


    return (
        <CartContext.Provider value={{
            cart,
            counter,
            setQuantity,
            addItem,
            clear,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
