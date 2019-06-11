import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
      <div>
        <div>This is the Menu page</div>
        <Link to='./'>
          <button>Home</button>
        </Link>
        <Link to='./Store'>
          <button>Store</button>
        </Link>
      </div>
  );
};

export default Menu;