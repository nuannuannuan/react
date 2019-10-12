import React, { Component } from 'react';
import styles from './index.module.scss';
import { Number } from '../../components';
import { InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

@createForm()
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapName: '',
      count: 60,
      flag: false,
      timer: 0,
    }
    this.validator = this.validator.bind(this);
    this.getCode = this.getCode.bind(this);
    this.timer = '';
  }

  componentDidMount() {
    // 验证规则直接写在rules 里面 方便直接
    // 如果是过多的验证  更适合自定义validator
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // 定时器必须要卸载
  }

  validator(value, rule) {
    // 自定义
    console.log(value, rule)

  }

  getCode() {
    const fn = () => {
      let { count } = this.state;
      this.setState({
        count: (count - 1), //如果用count-- 就会出现倒计时从60s 开始 会导致用户看到第2s 就直接消失
        flag: true,
      }, () => {
        if (count === 0) {
          clearInterval(timer);
          this.setState({
            count: 60,
            flag: false
          })
        }
      })
    }
    const timer = setInterval(fn, 1000);
    this.timer = timer;
  }







  render() {
    const _this = this;
    const { getFieldProps } = _this.props.form;
    const { count } = _this.state;
    const rules = [{ required: true, message: `请填写XXXXXX` }, { validator: _this.validator }];
    return (
      <div className={styles.content}>
        <Number />
        <InputItem
          onChange={_this.getPhoneValue}
          className={styles.input}
          {...getFieldProps('phone', {
            onChange(e) {
              _this.setState({
                phone: e
              })
            },
            rules: [{
              required: true,
              message: '请输入手机号码',
            }, {
              pattern: /^1[3-9]\d{9}$/,
              message: '请输入正确的手机号码'
            }]
          })}
          type="tel"
          maxLength="11"
          placeholder="请输入手机号码"
        />
        <InputItem placeholder="请输入XXX" {...getFieldProps('mapName', {
          rules,
        })} />
        <Button onClick={this.state.flag ? null : _this.getCode}>{this.state.flag ? `倒计时${count}s` : '重新发送'}</Button>
      </div>
    );
  }
}
export default Home;
