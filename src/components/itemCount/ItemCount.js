import './ItemCount.css';
import { useState } from 'react';

export function ItemCount({stock, inicial, onAdd}) {

  const [inicial2, setInicial2] = useState(inicial)

  const resta = () => {
    if(inicial2 > 0){
      setInicial2(inicial2 - 1);
    }
  }
  const suma = () => {
    if(inicial2 <= stock){
      setInicial2(inicial2 + 1);
    }
  }

  return (
    <div>
        <section className="count">
          <ul className="count__list">
            <li><button onClick={resta}>-</button></li>
            <li>{inicial2}</li>
            <li><button onClick={suma}>+</button></li>
          </ul>
          <button className="count__button" onClick={onAdd}>Agregar al carrito</button>
        </section>
    </div>
  );
}