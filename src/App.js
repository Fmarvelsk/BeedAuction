import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Auction from './component/Auction'
import ProductItem from './component/productItem'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route exact path="/">
      <Auction/>
      </Route>
      <Route path="/Auction-product">

      <ProductItem/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
