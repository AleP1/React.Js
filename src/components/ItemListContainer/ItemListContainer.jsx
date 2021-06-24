
import './ItemListContainer.css';
import { ItemCount } from '../itemCount/ItemCount';


export function ItemListContainer() {


  return (
    <div>
      <ItemCount onAdd={'nada'} inicial ={1} stock={10}/>
    </div>
  );
}

