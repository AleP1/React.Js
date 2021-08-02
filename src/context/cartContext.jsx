import { createContext, useEffect, useState } from 'react'
//import CatalogoJson from '../data/catalogo.json'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [counter, setCounter] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [itemSelected, setItemSelected] = useState([])
    const [total, setTotal] = useState(0)

    const addItem = () => {
        const isInCart = cart.some(product => product.itemSelected.id === itemSelected.id)
        console.log(`${isInCart}`)
        console.log(`${itemSelected.id}`)

        if (!isInCart) {
        setCart([...cart, {itemSelected, quantity}])////////console.log(`entro por aqui`)

        } else {
            cart.forEach(product => {
                if (product.itemSelected.id === itemSelected.id) {
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
        console.log(`${id}`)
        const filteredCart = cart.filter((product) => product.itemSelected.id !== id)
        setCart(filteredCart)
    }

    const cartSubTotal = () => {
        let subtotal = 0
        if (cart.length > 0) {
            cart.forEach(() => { subtotal += quantity })
        }
        setCounter(subtotal)
    }

    const counterTotal = () => {
        const nextTotal = cart
        .map(({ item, quantity}) => item.price * quantity)
        .reduce(
            (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice
        )
        setTotal(nextTotal)
    }


    useEffect(() => {
        cartSubTotal()
        counterTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart,
            total,
            counter,
            setQuantity,
            setItemSelected,
            addItem,
            clear,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
