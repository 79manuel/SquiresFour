import '../style/NavBar.css';
import React from 'react';


class NavBar extends React.Component {
 render () {
   return (
     <div className='nav-container'>
       <div className='logo'>
         <img src='./'/>
       </div>
       <div className='menu-icon'>
         <img src='./'/>
       </div>
     </div>
   );
 }
}

export default NavBar;