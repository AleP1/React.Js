import "./Item.css"
import {ItemCount} from "../itemCount/ItemCount"
import { Link } from "react-router-dom"

export const Item = ({item, onAdd})=>{

    console.log(item)
    console.log(`La categoria es ${item.categoryId}`)
    return (
        <article className="card">
        <Link to={`item/${item.id}`}>
            <img className="card__img"src={item.pictureUrl} alt="fotito"/>
            <p className="card__title">{item.title}</p>
        </Link>
            <p className="card__price">{item.price}</p>
            <p className="card__des">{item.description}</p>
            <ItemCount stock={item.stock} inicial={1}/>
        </article>
    )


}