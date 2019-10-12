import { observable, action } from "mobx";

export default class phoneModelStore {
  @observable showPhoneBox = false;
  @observable showTipsBox = false;
  @observable showCodeBox = false;
  @observable showReturnBox = false;


//   手机验证码弹框
  @action.bound
  showPhoneModel(){
    this.showPhoneBox=true;
  }

  @action.bound
  hidePhoneBox(){
    this.showPhoneBox=false;
  }

//   温馨提示弹框
  @action.bound
  showTipsModel(){
    this.showTipsBox=true;
  }

  @action.bound
  hideTipsBox(){
    this.showTipsBox=false;
  }

//   验证码弹框
  @action.bound
    showCodeModel(){
    this.showCodeBox=true;
  }

  // 返回弹框
  @action.bound
  showReturnModel(){
  this.showReturnBox=true;
}

// 关闭弹框
  @action.bound
  hideBoxModel(){
    this.showCodeBox=false;
    this.showTipsBox=false;
    this.showPhoneBox=false;
    this.showReturnBox=false;
  }
}