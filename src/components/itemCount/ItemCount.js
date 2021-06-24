import './ItemCount.css';
import bici from '../../assets/images/bici.jpg';
import { useState } from 'react';

export function ItemCount({stock, inicial, onAdd}) {

  const [inicial2, setInicial2] = useState(inicial)
  const [stock2, setStock2] = useState(stock)
  const [onAdd2, setOnAdd2] = useState(onAdd)

  const resta = () => {
    if(inicial2 > 0){
      setInicial2(inicial2 - 1);
      setStock2(stock2 + 1);
    }
  }
  const suma = () => {
    if(stock2 > 0){
      setInicial2(inicial2 + 1);
      setStock2(stock2 - 1);
    }
  }

  const on = () => {
    setOnAdd2(`Guardaste ${inicial2} unidades al carrito`)
  }


  return (
    <div>
        <section className="count">
          <div className="count__card">
            <img src={bici} alt="Bici"/>
            <label>Bicicleta</label>
            <p>Stock: {stock2}</p>
          </div>
          <ul className="count__list">
            <li><button onClick={resta}>-</button></li>
            <li>{inicial2}</li>
            <li><button onClick={suma}>+</button></li>
          </ul>
          <button className="count__button" onClick= {on}>Agregar al carrito</button>
          <p>{onAdd2}</p>
        </section>

    </div>
  );
}