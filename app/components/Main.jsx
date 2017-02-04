import React from 'react';
import {connect} from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>React Starter</div>
    );
  }
}

export default connect((state) => {
  return state;
})(Main);
