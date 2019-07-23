import React from 'react';
import SectionOneHome from '../sections/SectionOneHome';
import Awards from '../awards/Awards';
import './Home.sass';

class Home extends React.Component {
  render() {
    return (
        <main>
          <Awards />
          <section className='home-section'>
            <h2>Squires Four, Vernon's Favourite Pub</h2>
            <p>Squires Four Pub is where to eat in Vernon, enjoy our adventurous menu featuring the best burger, wings
              and fries in town, amazing appies, and traditional english pub fare all in the comfort of our old english
              style pub.</p>
          </section>
          <SectionOneHome />
        </main>
    );
  }
}

export default Home;