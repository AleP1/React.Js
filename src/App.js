import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

export function Ap() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:Id">
            <ItemListContainer />
          </Route>
          <Route path="/Item/:Id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

//function App() {
  //return (

    //<div className="App">
     // <header className="App-header">
      //  <NavBar />

      //  <div>
      //    <h1>Bik0</h1>
      //  </div>
      //  <ItemListContainer/>
      //  <ItemDetailContainer />
     // </header>
    //</div>
 // );
//}

//export default App;
