import "./ItemList.css"
import {Item} from "../item/Item"

export const ItemList =({items})=>{

    const des = items.map(item => <Item key={item.id} className="itemList__item" item={item}/>)

    return(

        <div className="itemList">
            {des}
        </div>
    )

}