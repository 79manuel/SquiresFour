import '../style/NavBar.css';
import menu from '../images/menu.png';
import logo from '../images/logo.png'
import React from 'react';


class NavBar extends React.Component {

  state = { on: false};

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  };

  render () {
   return (
     <div>
       <div className='nav-container'>
         <div className='logo'>
           <img style={{width: '90%'}} src={logo} alt='Squires Four Pub logo'/>
         </div>
         <div className='menu-icon'>
           <img
                onClick={this.toggle}
                style={{width: '20%'}}
                src={menu}
                alt='three lines menu for mobile'/>
         </div>
       </div>
     {this.state.on && this.props.children}
     </div>
   );
 }
}

export default NavBar;