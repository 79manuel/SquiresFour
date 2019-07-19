import React from 'react';
import './Contact.sass';

class Contact extends React.Component {
    render() {
        return (
            <main className='contact-main'>
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
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20389.55232346327!2d-119.2630888!3d50.2976389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd879dd685a97%3A0xf413a29ff8fbfaee!2s6301+Stickle+Rd%2C+Vernon%2C+BC+V1B+3R4!5e0!3m2!1sen!2sca!4v1563228800695!5m2!1sen!2sca"
                      frameBorder="0"
                      allowFullScreen>
                  </iframe>
                </section>
            </main>
        );
    }
}

export default Contact;