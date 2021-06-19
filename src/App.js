
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  let saludo = `Hola! soy Ale Piñeiro, este es mi promer proyecto con React.JS`

  return (

    <div className="App">
      <header className="App-header">
        <NavBar />

        <div>
          <h1>Bik0</h1>
        </div>
        <ItemListContainer greeting= {saludo} />
      </header>
    </div>
  );
}

export default App;
