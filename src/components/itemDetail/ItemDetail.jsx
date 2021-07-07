import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { ItemCount } from "../itemCount/ItemCount"

export const ItemDetail = ({ item }) => {
    console.log(item)

    const { title, price, pictureUrl, categoryId, description, stock } = item
    const [cantidadComprada, setCantidadComprada] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)

    const onAdd = (quantityToAdd) => {
        setCantidadComprada(quantityToAdd.target.value)
        setPrecioCompra((quantityToAdd.target.value) * price)
        document.getElementById("Buying").style.display = "none"
        document.getElementById("Buyed").style.display = "block"
    }

    return (
        <div className="card">
            <img className="card__img" src={pictureUrl} alt="fotito" />
            <p className="card__title">{title}</p>
            <p className="card__price">{price}</p>
            <p className="card__des">{description}</p>
            <p>stock: {stock}</p>
            <p>{categoryId}</p>
            <div id="Buying">
                <ItemCount stock={stock} onAdd={onAdd} />
                <p className="stockAlert">¡Quedan {stock} unidades!</p>
            </div>
            <div id="Buyed" style={{ display: "none" }}>
                <p>Estás comprando {cantidadComprada} {title} por ${precioCompra}</p>
                <Link to={'/cart'}><button>Terminar mi compra</button></Link>
            </div>
        </div>
    )

}