import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.sass';

class SideDrawer extends React.Component {
    render() {
      let drawerClass = 'side-drawer';
      if(this.props.show) {
        drawerClass = 'side-drawer open';
      }
        return (
            <nav className={drawerClass}>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/liquorstore'>Liquor Store</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
        );
    }
}

export default SideDrawer;