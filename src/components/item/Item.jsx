import "./Item.css"
import {ItemCount} from "../itemCount/ItemCount"
import {Link} from 'react-router-dom'

export const Item = ({item, onAdd})=>{
    console.log(item)
    return (
        <Link to={`/item/${item.id}`}>
        <article className="card">
            <img className="card__img"src={item.pictureUrl} alt="fotito"/>
            <p className="card__title">{item.title}</p>
            <p className="card__price">{item.price}</p>
            <p className="card__des">{item.description}</p>
            <ItemCount stock={5} inicial={0}/>
        </article>
        </Link>
    )


}