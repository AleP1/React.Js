import "./ItemDetail.css"
import { ItemCount } from "../itemCount/ItemCount"
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
    const [change, setChange] = useState(false)
    const { setItemSelected, setQuantity, addItem } = useContext(CartContext)

    const handlerAdd = (e) => {
        const quantityToAdd = parseInt(e.target.value)
        setQuantity(quantityToAdd)
        setItemSelected(item)
        setChange(true)
    }

    return (
        <article className="d__card" key={item.id}>
            <div className="d__card__sec1">
                <img className="d__card__img" src={item.pictureUrl} alt="fotito" />
                <p className="d__card__title">{item.title}</p>
                <p className="d__card__price">${item.price}</p>
            </div>
            <div className="d__card__sec2">
                <p className="d__card__des">{item.description}</p>
                {!change && <ItemCount stock={item.stock} inicial={1} onAdd={handlerAdd} />}
                {change && <Link to="/cart" className="d__card__finish">
                    <button
                        type="submit"
                        className="d__count__button"
                        onClick={addItem}>Termina tu compra</button>
                </Link>}
            </div>
        </article>
    )
}