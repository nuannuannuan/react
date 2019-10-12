import React, { Component } from 'react';
import styles from './index.module.scss';
import  Item  from './Item';

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presonNum: 183566210098,
      randomRange: { lowest: '100', largest: '300' },
      timer: 0,
      clearTimer: 0,
    }
    this.randomEvent = this.randomEvent.bind(this);

  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    clearInterval(this.state.clearTimer);
  }

  componentDidMount() {

    const timer = setInterval(this.randomEvent, 3000);
    const clearTimer = setInterval(() => {
      const { phoneNum } = this.state;
      this.setState({ phoneNum })
    }, 1000);
    this.setState({ timer, clearTimer });
  }

  randomEvent() {
    const { randomRange: { lowest, largest }, presonNum } = this.state;
    const rangeNum = parseInt(Math.random() * (largest - lowest + 1) + lowest, 10);
    this.setState({
      presonNum: presonNum + rangeNum
    })
  }

  render() {
    const { presonNum } = this.state;
    return (
      <div className={styles.number}>
        <div className={styles.content}>
          {
            presonNum.toString().split('').map((item, i) => (
              <Item key={i} item={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Number;
