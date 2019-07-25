import React from 'react';
import './SectionSpecialsHome.sass';

class SectionSpecialsHome extends React.Component {
    render() {
        return (
            <section className='home-specials'>
              <article>
                <h1>Daily Specials</h1>
                <h2>Monday</h2>
                <div className='item-price__div'>
                  <h3>Hard Shell Tacos (2)</h3>
                  <h3>$8</h3>
                </div>
                <div className='description__div'>
                  <p>Beef, fish, or chef’s creation taco</p>
                </div>
                <div className='item-price__div'>
                  <h3>Shepherd’s Pie</h3>
                  <h3>$17</h3>
                </div>
              </article>
              <article>
                <h2>Tuesday</h2>
                <div className='item-price__div'>
                  <h3>Dry Ribs</h3>
                  <h3>$8</h3>
                </div>
                <div className='item-price__div'>
                  <h3>Liver and Onions</h3>
                  <h3>$18</h3>
                </div>
              </article>
              <article>
                <h2>Wednesday</h2>
                <div className='item-price__div'>
                  <h3>Stake Sandwich</h3>
                  <h3>$14</h3>
                </div>
                <div className='description__div'>
                  <p>add mushrooms or onions $1</p>
                </div>
              </article>
              <article>
                <h2>Thursday</h2>
                <div className='item-price__div'>
                  <h3>Chicken Wings</h3>
                  <h3>49&#162; each</h3>
                </div>
              </article>
              <article>
                <h2>Friday</h2>
                <div className='item-price__div'>
                  <h3>Weekly Dinner Special</h3>
                  <h3>TBD</h3>
                </div>
                <div className='item-price__div'>
                  <h3>Cod 'n' Chips</h3>
                  <h3>$15.95</h3>
                </div>
              </article>
              <article>
                <h2>Saturday</h2>
                <div className='item-price__div'>
                  <h3>Weekly Dinner Special</h3>
                  <h3>TBD</h3>
                </div>
              </article>
              <article>
                <h2>Sunday</h2>
                <div className='item-price__div'>
                  <h3>Burger & Beer</h3>
                  <h3>$12.95</h3>
                </div>
              </article>
            </section>
        );
    }
}

export default SectionSpecialsHome;