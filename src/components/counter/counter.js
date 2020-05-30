import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    // change code below this line
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    // change code above this line
    render() {
      const {count} = this.state;
      return (
        <div className="mt20">
          <button className='inc btn_very_small' onClick={(e) => this.increment(e)}>+</button>
          <button className='dec btn_very_small' onClick={(e) => this.decrement(e)}>-</button>
          <button className='reset btn_very_small' onClick={(e) => this.reset(e)}>x</button>
          <span className="counter">{count} people found this review helpful</span>
        </div>
      );
    }
  };

  export default Counter;