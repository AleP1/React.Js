import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

export const CartPage = () => {
    const {cart, total, clear, removeItem} = useContext(CartContext)


    return (
        cart.length ?
        <div>
            <div className="Cart__List">
                {cart.map((product) => {
                    return (
                      <div key={product.itemSelected.id}>
                            <h3>{product.itemSelected.title}</h3>
                            <span>Subtotal: ${parseInt(product.itemSelected.price) * product.quantity}</span><br />
                            <span>Cantidad: {product.quantity}</span>
                            <button onClick={()=>removeItem(product.itemSelected.id)}>X</button>
                      </div>
                    )
                    
                })}
            </div>
            <div className="Cart__Footer">
                <h3>Total: ${total}</h3>
                <button onClick={clear}>Vaciar carrito</button>
            </div>
        </div>
    :
        <div>
            Nada por aqu!
            <Link to='/'>Ir a inicio</Link>
        </div>      )
}