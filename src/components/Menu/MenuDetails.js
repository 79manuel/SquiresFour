import React from 'react';
import { connect } from 'react-redux'

const MenuDetails = (props) => {
  if(!props.selectedMenuItem) {
    return <h1>Select Course</h1>
  }
  return (
      <div>
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