import React from 'react';
import { connect } from 'react-redux';
import { SelectMenuCourse } from '../../actions';
import './MenuList.sass';

class MenuList extends React.Component {

    renderList() {
      return this.props.menuItems.map((menuItem) => {
        return (
            <div key={menuItem.course}>
              <ul>
                <li onClick={()=> this.props.SelectMenuCourse(menuItem)}>{menuItem.course}</li>
              </ul>
            </div>
        );
      })
    }

    render() {
        return <div className='menu-list'>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menuItems
  }
};

export default connect(mapStateToProps, { SelectMenuCourse })(MenuList);