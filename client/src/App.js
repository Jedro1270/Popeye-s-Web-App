import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './components/pages/frontPage';
import OrdersPage from './components/pages/ordersPage';



function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/orders'>
          <OrdersPage />
        </Route>

        <Route path='/'>
          <FrontPage />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
