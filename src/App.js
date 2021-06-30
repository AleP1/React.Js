
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (

    <div className="App">
      <header className="App-header">
        <NavBar />

        <div>
          <h1>Bik0</h1>
        </div>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
