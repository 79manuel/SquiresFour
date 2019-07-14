import React from 'react';
import ToggleButton from '../SideDrawer/ToggleButton';
import { Link } from "react-router-dom";
import './toolbar.sass';
import logo from '../../images/squires_four_pub_logo.png';

const Toolbar = (props) => {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
        <div className='toolbar__logo'>
          <Link to='/'><img src={logo} alt='logo'/></Link>
        </div>
        <div className='spacer'></div>
        <div>
          <ToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className='toolbar__navigation-items'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/specials'>Specials</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/liquorstore'>Liquor Store</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;