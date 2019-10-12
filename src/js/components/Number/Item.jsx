import React, { Component } from 'react';
import styles from './index.module.scss';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      oldNum: null,
      flag: false
    }

  }

  componentDidMount() {

  }

  static getDerivedStateFromProps(nextprops, prestate) {
    if (!prestate.oldNum) {
      return { oldNum: nextprops.item }
    }
    if (nextprops.item !== prestate.oldNum) {
      return { num: nextprops.item, oldNum: prestate.num, flag: true }
    }
    return { num: nextprops.item, oldNum: prestate.num, flag: false };
  }






  render() {
    const { num, flag, oldNum } = this.state;
    return (

      <div className={styles.numBox}>
        <div className={flag ? styles.active : null}>
          <div>{oldNum}</div>
          <div >{num}</div>
        </div>
      </div>
    );
  }
}

export default Item;
