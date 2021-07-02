import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

export default function App() {
  return (
    <Router>
    <div className="App">
     <header className="App-header">
        <NavBar/>
     </header>
      <main>
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
      
    </div>
    </Router>
  );
}

//function App() {
  //return (


      //  <NavBar />

      //  <div>
      //    <h1>Bik0</h1>
      //  </div>
      //  <ItemListContainer/>
      //  <ItemDetailContainer />
     // 
 // );
//}

//export default App;
