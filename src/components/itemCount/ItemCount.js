import './ItemCount.css';
import bici from '../../assets/images/bici.jpg';

export function ItemCount({stock, inicial, onAdd, sumClick, resClick, buttonClick}) {

  return (
    <div>
        <section className="count">
          <div className="count__card">
            <img src={bici} alt="Bici"/>
            <label>Bicicleta</label>
            <p>Stock: {stock}</p>
          </div>
          <ul className="count__list">
            <li><button onClick={resClick}>-</button></li>
            <li>{inicial}</li>
            <li><button onClick={sumClick}>+</button></li>
          </ul>
          <button className="count__button" onClick={buttonClick}>Agregar al carrito</button>
          <p>{onAdd}</p>
        </section>

    </div>
  );
}