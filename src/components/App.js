import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Store from "../pages/Store";
import '../style/App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/store' component={Store}/>
      </Router>
    );

  }
}

export default App;