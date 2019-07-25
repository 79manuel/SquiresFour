import React from 'react';
import './Footer.sass';

class Footer extends React.Component {
    render() {
        return (
          <footer>
            <div className='footer__hours'>
              <h1>HOURS</h1>
              <p>
                <span>8 a.m. to 11 p.m. everyday</span><br/>
                <span>Kitchen closes at 9 p.m.<br/>
                  (10 p.m. Thu, Fri, Sat)</span><br/>
              </p>
            </div>
            <div className='footer__info'>
              <div>
                <p>
                  <span>Squires Four Public House</span>
                   6301 Stickle Road Vernon.
                   <a href='tel: 2505492144'>Phone: 250-549-2144</a>
                  <a href='mailto: info@squiresfourpub.com'>Email: info@squiresfourpub.com</a>
                   </p>
                <p>
                  <span>Squires Four Cold Beer & Wine Store</span>
                  6301 Stickle Road Vernon.
                  <a href='tel: 2505492226'>Phone: 250-549-2226</a>
                </p>
              </div>
              <p className='footer__copyright'>Squires Four Public House &copy; 2019</p>
            </div>
          </footer>
        );
    }
}

export default Footer;