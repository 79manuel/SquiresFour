import React from 'react';
import './Contact.sass';

class Contact extends React.Component {
    render() {
        return (
            <main>
                <section className='contact-background'>
                  <h1>Contact</h1>
                  <div className='contact-info'>
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
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.681188709584!2d-119.25550348455417!3d50.29787877945465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd879dd685a97%3A0xf413a29ff8fbfaee!2s6301+Stickle+Rd%2C+Vernon%2C+BC+V1B+3R4!5e0!3m2!1ses!2sca!4v1563227008753!5m2!1ses!2sca"
                      frameBorder="0"
                      allowFullScreen>
                  </iframe>
                </section>
            </main>
        );
    }
}

export default Contact;