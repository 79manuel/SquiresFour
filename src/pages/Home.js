import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Paralax from '../components/Paralax';
import BlockOne from '../components/BlockOne';
import BlockTwo from '../components/BlockTwo';
import BlockThree from '../components/BlockThree';
import '../style/Home.css';

const Home = () => {
  return (
      <div className='home-wrapper'>
        <Paralax/>
          <NavBar/>
          <Link to='./Store'>
            <button>Store</button>
          </Link>
          <Link to='./Menu'>
            <button>Menu</button>
          </Link>
        <BlockOne/>
        <BlockTwo/>
        <BlockThree/>
      </div>


  );
};

export default Home;