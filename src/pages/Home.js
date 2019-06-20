import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Paralax from '../components/Paralax';
import BlockOne from '../components/BlockOne';
import BlockTwo from '../components/BlockTwo';
import BlockThree from '../components/BlockThree';
import BlockFour from '../components/BlockFour';
import '../style/Home.css';

class Home extends React.Component {
  render() {
    return (
        <div className='home-wrapper'>
          <Paralax/>
          <NavBar>
            <ul className='dropdown'>
              <li><Link className='link' to='/'>Home</Link></li>
              <li><Link className='link' to='/menu'>Menu</Link></li>
              <li><Link className='link' to='./#'>Specials</Link></li>
              <li><Link className='link' to='./store'>Liquor Store</Link></li>
              <li><Link className='link' to='./#'>Contact</Link></li>
            </ul>
          </NavBar>
          <BlockOne/>
          <BlockTwo/>
          <BlockThree/>
          <BlockFour/>
        </div>
    );
  }
}

export default Home;