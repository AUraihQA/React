'use strict';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Components/09-Routing/Home';
import About from './Components/Components/09-Routing/About';
import Product from './Components/Components/09-Routing/Product';
import User from "./Components/Components/09-Routing/User";
import Nav from "./Components/Components/09-Routing/Nav";

const App = () => {
  return (
    <div className="App">
       <div className="App">
      <Router>
        <Nav />
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
        </Switch>
      </Router>
    </div>
      
    </div>
  );
}

export default App;
