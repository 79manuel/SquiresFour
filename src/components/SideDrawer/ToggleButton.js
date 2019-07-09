import React from 'react';
import './ToggleButton.sass';

class ToggleButton extends React.Component {
    render() {
        return (
            <button className='toggle-button' onClick={this.props.click}>
              <div className='toggle-button__line'></div>
              <div className='toggle-button__line'></div>
              <div className='toggle-button__line'></div>
            </button>
        );
    }
}

export default ToggleButton;