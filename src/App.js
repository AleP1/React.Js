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
                    <React.Fragment>
                <main>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                        <Route path="/item/:id">
                            <ItemDetailContainer />
                        </Route>
                    <Route path='/cart'>
                        <CartPage />
                    </Route>
                </main>
                    </React.Fragment>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}
