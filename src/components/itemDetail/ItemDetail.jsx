import "../item/Item.css"
import {ItemCount} from "../itemCount/ItemCount"
import { Link } from 'react-router-dom';
import {useState} from 'react'

export const ItemDetail = ({ item }) => {
    const [change, setChange] = useState(false)
    const [quantity, setQuantity] = useState()

    const onAdd = (e) => {
        const quantityToAdd = parseInt(e.target.value)
        setQuantity(quantityToAdd)
        setChange(true)
        console.log(quantity)
    }

    return (
        <article className="card">
            <img className="card__img" src={item.pictureUrl} alt="fotito"/>
            <p className="card__title">{item.title}</p>
            <p className="card__price">{item.price}</p>
            <p className="card__des">{item.description}</p>
            {!change && <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>}
            {change && <Link to="/cart">
             <button
              type="submit"
              className="count__button">Termina tu compra</button>
             </Link>}
        </article>
    )
}