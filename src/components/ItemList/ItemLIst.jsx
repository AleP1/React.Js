import "./ItemList.css"
import {Item} from "../item/Item"
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemList =({items, loading})=>{

    const des = loading
    ? <Spinner color="primary" />
    : items.map(item => <Item key={item.id} className="itemList__item" item={item}/>)

    return(

        <div className="itemList">
            {des}
        </div>
    )

}