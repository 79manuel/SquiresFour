import React from 'react';
import { connect } from 'react-redux';

import './MenuDetails.sass';

const MenuDetails = (props) => {
  if(!props.selectedMenuItem) {
    return (
        <div className='menu-details-container'>
          <h1 >Select Course</h1>
        </div>
    );
  }
  return (
      <div className='menu-details-container'>
        <h1>{props.selectedMenuItem.course}</h1>
        <ul>
          <li>{props.selectedMenuItem.items.item1}</li>
          <li>{props.selectedMenuItem.items.item2}</li>
          <li>{props.selectedMenuItem.items.item3}
            <p>{props.selectedMenuItem.details.details3}</p>
          </li>
        </ul>

      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenuItem: state.selectedMenuItem
  }
};

export default connect(mapStateToProps)(MenuDetails);