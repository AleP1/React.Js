import './ItemListContainer.css';

export function ItemListContainer(props) {
    
  const lname = <input type="text" id="lname"/>
  const fname = <input type="text" id="fname"/>

  return (
    <div>
      <form >
          <label for="fname">Nombre:</label>
          {fname}
          <label for="lname">apellido:</label>
          {lname}

      </form>
      <p>{props.greeting}</p>
    </div>
  );
}

