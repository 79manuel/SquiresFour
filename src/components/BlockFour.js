import React from 'react';
import '../style/BlockFour.css';

const BlockFour = () => {
  return (
      <footer>
        <div>
          <p><span style={{ fontWeight: 'bold', fontSize: '15px'}}>
            Squires Four Public House</span><br/>
            6301 Stickle Road Vernon<br/>
            Phone: <a style={{ textDecoration: 'none', color: 'white' }} href='tel: 2505492144'>250-549-2144</a><br/>
            Email: <a style={{ textDecoration: 'none', color: 'white' }} href= 'mailto: info@squiresfourpub.com'>
              info@squiresfourpub.com
                  </a><br/>
          </p>
          <p><span style={{ fontWeight: 'bold', fontSize: '15px'}}>
            Squires Four Cold Beer & Wine Store</span><br/>
            Phone: <a style={{ textDecoration: 'none', color: 'white' }} href='tel: 2505492226'>250-549-2226</a><br/>
          </p>
        </div>
        <p> 2019 &copy; Squires Four Public House  </p>
      </footer>
  );
};

export default BlockFour;