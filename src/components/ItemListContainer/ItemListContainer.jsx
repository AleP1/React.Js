
import './ItemListContainer.css';
import React, {useState} from 'react';
import { ItemCount } from '../itemCount/ItemCount';


export function ItemListContainer() {
  const [stock, setStock] = useState(10);
  const [inicial, setInicial] = useState(1);
  const [onAdd, setOnAdd] = useState(' ');

  return (
    <div>
      <ItemCount  onAdd={onAdd} inicial ={inicial} stock={stock} 
      sumClick = {() => stock > 0 ? setInicial(inicial + 1) & setStock(stock - 1) : setOnAdd('Disculpe, ya agregó todas las unidades en stock')}
      resClick = {() => inicial > 0 ? setInicial(inicial - 1) & setStock(stock + 1) : setOnAdd(`Tiene ${inicial} unidades en su carrito`)}
      buttonClick = {() => setOnAdd(`Tiene ${inicial} unidades en su carrito`)}
      />
    </div>
  );
}

