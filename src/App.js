'use strict';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/09-Routing/Home';
import About from './Components/09-Routing/About';
import Product from './Components/09-Routing/Product';
import User from "./Components/09-Routing/User";
import Navigation from "./Components/09-Routing/Nav";
import Notfound from './Components/09-Routing/NotFound';
import Tesco from './Components/10-DataRequests/Tesco';
import FilmReq from './Components/MoviesTask/Search';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <Product />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>

            <Route path="/tesco">
              <Tesco />
            </Route>
            <Route  path="/film" >
              <FilmReq/>
            </Route>
            <Route>
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
