import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Paralax from '../components/Paralax';
import BlockOne from '../components/BlockOne';
import BlockTwo from '../components/BlockTwo';
import BlockThree from '../components/BlockThree';
import BlockFour from '../components/BlockFour';
import '../style/Home.css';

const Home = () => {
  return (
      <div className='home-wrapper'>
        <Paralax/>
        <NavBar>
          <ul className='dropdown'>
            <li>Menu</li>
            <li>Specials</li>
            <li>Liquor Store</li>
            <li>Contact</li>
          </ul>
        </NavBar>
        <BlockOne/>
        <BlockTwo/>
        <BlockThree/>
        <BlockFour/>
      </div>
  );
};

export default Home;