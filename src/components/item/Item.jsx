import "./Item.css"
import {ItemCount} from "../itemCount/ItemCount"
import {Link, NavLink} from 'react-router-dom'

export const Item = ({item, onAdd})=>{
    console.log(item)
    return (
        <Link to='item/:id'>
        <article className="card">
            <NavLink to='/category/:Id'>
            <img className="card__img"src={item.pictureUrl} alt="fotito"/>
            </NavLink>
            <NavLink to='/category/:Id'>
            <p className="card__title">{item.title}</p>
            </NavLink>
            <NavLink to='/category/:Id'>
            <p className="card__price">{item.price}</p>
            </NavLink>
            <NavLink to='/category/:Id'>
            <p className="card__des">{item.description}</p>
            </NavLink>
            <ItemCount stock={5} inicial={0}/>
        </article>
        </Link>
    )


}