import './ItemCount.css';
import bici from '../../assets/images/bici.jpg';
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

  const carrito = () => {
    console.log(`agregaste ${inicial2} unidades al carrito`)
  }



  return (
    <div>
        <section className="count">
          <div className="count__card">
            <img src={bici} alt="Bici"/>
            <label>Bicicleta</label>
          </div>
          <ul className="count__list">
            <li><button onClick={resta}>-</button></li>
            <li>{inicial2}</li>
            <li><button onClick={suma}>+</button></li>
          </ul>
          <button className="count__button" onClick={carrito}>Agregar al carrito</button>
          <p>{onAdd}</p>
        </section>

    </div>
  );
}