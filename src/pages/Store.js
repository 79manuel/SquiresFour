import {Link} from "react-router-dom";
import React from 'react';
import NavBar from '../components/NavBar';
import BlockTwo from '../components/BlockTwo';
import BlockThree from "../components/BlockThree";
import BlockFour from "../components/BlockFour";
import'../style/Store.css';


class Store extends React.Component {
  render () {
    return (
        <div className='store-wrapper'>
          <NavBar>
            <ul className='dropdown'>
              <li><Link className='link' to='/'>Home</Link></li>
              <li><Link className='link' to='/menu'>Menu</Link></li>
              <li><Link className='link' to='./#'>Specials</Link></li>
              <li><Link className='link' to='./store'>Liquor Store</Link></li>
              <li><Link className='link' to='./#'>Contact</Link></li>
            </ul>
          </NavBar>
          <BlockTwo styleName='blocktwo-store'
                    h1='Store'
                    text='NEWLY RENOVATED and EXPANDED....twice the original size inside. That means almost TWICE the amount
                    of selection for our customers. We also feature tastings almost every Friday afternoon!'
                    text2='We carry a wide range of liquor, cold beer, cider, coolers and wines from countries around the globe.
                    We are constantly adding new products so visit us regularly to see what is new in store.'
                    text3='Squires Four Cold Beer & Wine Store accepts Debit, Visa, MasterCard, American Express and Cash. If
                    you are under 30 years of age please have 2 pieces of ID.'
          />
          <BlockThree/>
          <BlockFour/>
        </div>
    );
  }
}

export default Store;