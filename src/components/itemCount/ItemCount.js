import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, inicial, onAdd }) => {

  const [inicial2, setInicial2] = useState(inicial);

  const resta = () => {
    if (inicial2 > 0) {
      setInicial2(inicial2 - 1);
    }
  };
  const suma = () => {
    if (inicial2 <= stock) {
      setInicial2(inicial2 + 1);
    }
  };

  return (
    <section className='count'>
      <ul className='count__list'>
        <li><button type='button' onClick={resta}>-</button></li>
        <li>{inicial2}</li>
        <li><button type='button' onClick={suma}>+</button></li>
      </ul>
      <button
        type='submit'
        className='count__button'
        value={inicial2}
        onClick={onAdd}
      >
        AGREGAR AL CARRITO
      </button>
    </section>
  );
};

export default ItemCount;
