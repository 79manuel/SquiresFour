import React from 'react';
import { connect } from 'react-redux';

import './MenuDetails.sass';

const MenuDetails = (props) => {
  if(!props.selectedMenuItem) {
    return (
        <div className='menu-details-wrapper__laptop'>
          <div className='menu-details-container'>
            <h1 >Select Course</h1>
          </div>
        </div>
    );
  }
  return (
      <div className='menu-details-wrapper__laptop'>
        <div className='menu-details-container'>
          <h1>{props.selectedMenuItem.course}</h1>
          <ul>
            <li>{props.selectedMenuItem.items.item1}
              <p>{props.selectedMenuItem.details.details1}</p>
              <p>{props.selectedMenuItem.prices.price1}</p>
            </li>
            <li>{props.selectedMenuItem.items.item2}
              <p>{props.selectedMenuItem.details.details2}</p>
              <p>{props.selectedMenuItem.prices.price2}</p>
            </li>
            <li>{props.selectedMenuItem.items.item3}
              <p>{props.selectedMenuItem.details.details3}</p>
              <p>{props.selectedMenuItem.prices.price3}</p>
            </li>
            <li>{props.selectedMenuItem.items.item4}
              <p>{props.selectedMenuItem.details.details4}</p>
              <p>{props.selectedMenuItem.prices.price4}</p>
            </li>
            <li>{props.selectedMenuItem.items.item5}
              <p>{props.selectedMenuItem.details.details5}</p>
              <p>{props.selectedMenuItem.prices.price5}</p>
            </li>
            <li>{props.selectedMenuItem.items.item6}
              <p>{props.selectedMenuItem.details.details6}</p>
              <p>{props.selectedMenuItem.prices.price6}</p>
            </li>
            <li>{props.selectedMenuItem.items.item7}
              <p>{props.selectedMenuItem.details.details7}</p>
              <p>{props.selectedMenuItem.prices.price7}</p>
            </li>
            <li>{props.selectedMenuItem.items.item8}
              <p>{props.selectedMenuItem.details.details8}</p>
              <p>{props.selectedMenuItem.prices.price8}</p>
            </li>
            <li>{props.selectedMenuItem.items.item9}
              <p>{props.selectedMenuItem.details.details9}</p>
              <p>{props.selectedMenuItem.prices.price9}</p>
            </li>
            <li>{props.selectedMenuItem.items.item10}
              <p>{props.selectedMenuItem.details.details10}</p>
              <p>{props.selectedMenuItem.prices.price10}</p>
            </li>
            <li>{props.selectedMenuItem.items.item11}
              <p>{props.selectedMenuItem.details.details11}</p>
              <p>{props.selectedMenuItem.prices.price11}</p>
            </li>
            <li>{props.selectedMenuItem.items.item12}
              <p>{props.selectedMenuItem.details.details12}</p>
              <p>{props.selectedMenuItem.prices.price12}</p>
            </li>
            <li>{props.selectedMenuItem.items.item13}
              <p>{props.selectedMenuItem.details.details13}</p>
              <p>{props.selectedMenuItem.prices.price13}</p>
            </li>
            <li>{props.selectedMenuItem.items.item14}
              <p>{props.selectedMenuItem.details.details14}</p>
            </li>
            <li>{props.selectedMenuItem.items.item15}
              <p className='price'>{props.selectedMenuItem.prices.price14}</p>
              <p className='extra-price'>{props.selectedMenuItem.prices.price16}</p>
            </li>
            <li>{props.selectedMenuItem.items.item16}
              <p className='price'>{props.selectedMenuItem.prices.price15}</p>
              <p className='extra-price'>{props.selectedMenuItem.prices.price17}</p>
            </li>
            <li style={{fontSize: '10px'}}>GF = Gluten Free, GFM = Gluten Free if Modified, V = Vegetarian</li>
          </ul>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenuItem: state.selectedMenuItem
  }
};

export default connect(mapStateToProps)(MenuDetails);