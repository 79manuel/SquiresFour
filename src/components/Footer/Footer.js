import React from 'react';
import './Footer.sass';

class Footer extends React.Component {
    render() {
        return (
          <footer>
            <div className='footer__hours'>
              <h1>HOURS</h1>
              <p>
                <span>Sunday, Monday, Tuesday, Wednesday</span><br/>
                8am - 11pm - Kitchen closes @ 9pm<br/>
                <span>Thursday, Friday, Saturday</span><br/>
                8am - 11pm - Kitchen closes @ 10pm<br/>
              </p>
            </div>
            <div className='footer__info'>
              <div>
                <p>
                  <span>Squires Four Public House</span><br/><br/>
                   6301 Stickle Road Vernon.<br/>
                   <a href='tel: 2505492144'>Phone: 250-549-2144</a><br/>
                  <a href='mailto: info@squiresfourpub.com'>Email: info@squiresfourpub.com</a><br/>
                   </p>
                <p>
                  <span>Squires Four Cold Beer & Wine Store</span><br/><br/>
                  6301 Stickle Road Vernon<br/>
                  <a href='tel: 2505492226'>Phone: 250-549-2226</a><br/>
                </p>
              </div>
              <p className='footer__copyright'>Squires Four Public House &copy; 2019</p>
            </div>
          </footer>
        );
    }
}

export default Footer;