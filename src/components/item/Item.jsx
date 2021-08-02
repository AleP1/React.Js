import "./Item.css"
import { Link } from "react-router-dom"
export const Item = ({item, onAdd})=>{


    return (
        <article className="card">
        <Link  to={`/item/${item.id}`}>
            <img className="card__img" src={item.pictureUrl} alt="fotito"/>
            <p className="card__title">{item.title}</p>
            <p className="card__price">${item.price}</p>
        </Link>
        </article>
    )
}