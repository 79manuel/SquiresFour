import React from 'react';
import './Footer.sass';

class Footer extends React.Component {
    render() {
        return (
          <footer>
            <div className='footer__hours'>
              <h1>HOURS</h1>
              <section className='footer__hours__alignment'>
                <p>
                  <span>Squires Four Pub</span><br/>
                    11 a.m. to 11 p.m. everyday<br/>
                  (10 a.m. to 11 p.m. Sunday)<br/>
                  Kitchen closes at 9 p.m.
                </p>
                <p>
                  <span>Liquor Store</span><br/>
                  9am-11pm every day<br/>
                </p>
              </section>
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
                  <a href='tel: 2505492144'>Phone: 250-549-2144</a>
                </p>
              </div>
              <p className='footer__copyright'>Squires Four Public House &copy; 2019</p>
            </div>
          </footer>
        );
    }
}

export default Footer;