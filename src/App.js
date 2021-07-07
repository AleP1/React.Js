import './app.css'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NoMatch } from './components/NoMatch/NoMatch';
import { CartPage } from './components/CartPage/cartPage';

export const App = () => {
    return (
        <Router>
            <header className="App-header">
                <NavBar />
            </header>
            <Switch>
                <main>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:Id">
                        <ItemDetailContainer />
                    </Route>
                    <Route path='/cart'>
                        <CartPage />
                    </Route>
                </main>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}
