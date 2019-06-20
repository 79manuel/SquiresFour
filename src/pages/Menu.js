import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Paralax from '../components/Paralax';
import MenuList from '../components/MenuList';
import BlockThree from '../components/BlockThree';
import BlockFour from '../components/BlockFour';
import MenuDetails from "../components/MenuDetails";
import '../style/Menu.css';

const Menu = () => {
  return (
      <div className='menu-wrapper'>
        <Paralax styleName='paralax-menu'/>
        <NavBar>
          <ul className='dropdown'>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/menu'>Menu</Link></li>
            <li><Link className='link' to='./#'>Specials</Link></li>
            <li><Link className='link' to='./store'>Liquor Store</Link></li>
            <li><Link className='link' to='./#'>Contact</Link></li>
          </ul>
        </NavBar>
        <MenuList/>
        <MenuDetails/>
        <BlockThree/>
        <BlockFour/>
      </div>
  );
};

export default Menu;