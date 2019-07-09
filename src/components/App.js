import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Footer from './Footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import Contact from "./pages/Contact";
import LiquorStore from './pages/LiquorStore';


class App extends React.Component {
  state={
    sideDrawerOpen: false
  };

  toggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropHandler}/>;
    }
    return (
        <Router>
          <div className={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.toggleHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Menu' component={Menu}/>
              <Route path='/Specials' component={Specials}/>
              <Route path='/Contact' component={Contact}/>
              <Route path='/LiquorStore' component={LiquorStore}/>
            </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;