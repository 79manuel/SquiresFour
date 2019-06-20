import React from 'react';
import classnames from 'classnames';
import '../style/BlockTwo.css';

// Squires Four Pub Description

class BlockTwo extends React.Component {
  render() {
    return(
      <section className={classnames('blocktwo', this.props.styleName)}>
        <div className='description-container'>
          <h1>{this.props.h1}</h1>
          <p>
          {this.props.text}<br/><br/>
          {this.props.text2}<br/><br/>
          {this.props.text3}
          </p>
        </div>
      </section>
    );
  }
}

export default BlockTwo;