import {
  observable,
  action,
  computed
} from "mobx";

export default class headStore {
  @observable name = '约惠宝';
  @observable title = '每月1元钱 月月享优惠';
  @observable subTitle = '流量 语音 短信大放送';
  @observable state = 'fail';
  @observable mobileNo = '15990158853';
  @observable btnText = '流量 语音 短信大放送';

  @computed
  get stateText() {
    let text;
    const {
      state
    } = this;
    if (state === 'fail') {
      text = '业务办理失败';
    } else if (state === 'success') {
      text = '约惠守护中';
    } else if (state === 'pending') {
      text = '业务受理中';
    }
    return text;
  }

  @action.bound
  setTitle(stateText) {
    this.stateText = stateText;
  }
}