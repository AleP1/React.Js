import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

export const CartPage = () => {
    const {cart, clear, removeItem} = useContext(CartContext)

    return (
        cart.length ?
        <div>
            <div className="Cart__List">
                {cart.map((product, index) => {
                    return (
                      <div key={index}>
                            <h3>{product.title}</h3>
                            <span>Subtotal: {product.price * product.quantity}</span><br />
                            <span>Cantidad: {product.quantity}</span>
                            <button onClick={()=>removeItem(product.id)}>X</button>
                        </div>
                    )
                })}
            </div>
            <div className="Cart__Footer">
                <button onClick={clear}>Vaciar carrito</button>
            </div>
        </div>
    :
        <div>
            Nada por aqu!
            <Link to='/'>Ir a inicio</Link>
        </div>      )
}