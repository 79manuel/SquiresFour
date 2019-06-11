import React from 'react';
import '../style/BlockThree.css';

const BlockThree = () => {
  return (
    <article className='block-three'>
      <h1>Hours</h1>
      <p><span style={{ fontWeight: 'bold' }}>Sunday, Monday, Tuesday, Wednesday</span><br/>
        8am - 11pm - Kitchen closes @ 9pm<br/>
        <span style={{ fontWeight: 'bold' }}>Thursday, Friday, Saturday</span><br/>
        8am - 11pm - Kitchen closes @ 10pm
      </p>
    </article>
  );
};

export default BlockThree;
