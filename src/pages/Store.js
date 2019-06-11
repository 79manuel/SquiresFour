import React from 'react';
import { Link } from 'react-router-dom';

class Store extends React.Component {
  render () {
    return (
        <div>
          <div>Store Page</div>
          <Link to='./'>
              <button>Home</button>
          </Link>
          <Link to='./Menu'>
            <button>Menu</button>
          </Link>
        </div>
    );
  }
}

export default Store;