import React from 'react';
import '../style/Paralax.css';
import classnames from 'classnames';

class Paralax extends React.Component {
  render() {
    return <div className={classnames('paralax', this.props.styleName)}>

    </div>;
  };
}
export default Paralax;
