import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const Routes = () => {
  return (

    <Router>
      <header className='App-header'>
        <NavBar />
      </header>
      <Switch>
        <main>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route path='/category/:Id'>
            <ItemListContainer />
          </Route>
          <Route path='/Item/:Id'>
            <ItemDetailContainer />
          </Route>
        </main>
      </Switch>
    </Router>
  );
};

export default Routes;
