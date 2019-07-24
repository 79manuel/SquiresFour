import React from 'react';
import goldmedal from "../../images/gold-medal.png";
import medal from '../../images/medal.png';
import './Awards.sass';
class Awards extends React.Component {
    render() {
        return (
          <div className='background-image'>
            <div className='award1'>
              <img src={goldmedal} alt='medal'/>
              <p>Best Appies Winner 2009</p>
            </div>
            <div className='award2'>
              <img src={goldmedal} alt='medal'/>
              <p>Best Appies Winner 2008</p>
            </div>
            <div className='award3'>
              <img src={medal} alt='medal'/>
              <p>Finalist for Best Pub 2010</p>
            </div>
            <div className='award4'>
              <img src={medal} alt='medal'/>
              <p>Finalist for Best Appies 2010</p>
            </div>
            <div className='award5'>
              <img src={medal} alt='medal'/>
              <p>Finalist for Best Pub 2009</p>
            </div>
            <div className='award6'>
              <img src={medal} alt='medal'/>
              <p>Finalist for Best French Fries 2008</p>
            </div>
            <div className='award7'>
              <img src={medal} alt='medal'/>
              <p>Finalist Best Late Night Bite 2008</p>
            </div>
            <div className='award8'>
              <img src={medal} alt='medal'/>
              <p>Finalist Best Pub 2008</p>
            </div>
          </div>
          );
    }
}

export default Awards;