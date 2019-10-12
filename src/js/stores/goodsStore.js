import {
  observable,
  action
} from "mobx";

export default class goodsStore {
  @observable goodsFree = {}
  @observable goodsList = [];
  @observable selectedId = null;
  @observable moreFlag = false;
  @observable goodsRule = `
    1、业务叠加规则
    通过平档或升档办理4G自选套餐合约流量包参加活动，享流量翻番。办理后，次月生效。
    若您为4G自选套餐或4G飞享套餐客户，可直接在本页面将原套餐内的流量包升级为合约流量包，语音和短彩信保持不变；办理后合约期为自生效月起的12个月；到期后，如客户未自行变更，将自动延续到期当月的流量包资费。
    若您选择的是70-300元档合约全国流量包，不可叠加任何含高速流量的业务、流量王者包、上网伴侣副卡及其主号码、多终端共享副号码、多终端共享副卡及其主号码、指定的流量提速包（指全国版任我用适用的15元/1GB的国内流量提速包、以及本地版任我用使用的15元/1GB本地提速包）。若您已经订购上述产品，需退订后方能订购合约全国大流量包。
    若您已参加套餐升级送高速流量活动，开通合约流量包后原活动将自动失效。
    2.合约期相关规则
    升级至4G自选套餐合约流量包后，合约期为自次月起的12个月，期间您不得降低套餐档次、销户或转出合约流量包；您可申请转入更高档次的合约流量包，合约期不重新计算。
    合约期内，您可以办理其他合约活动（包括充值送、宽带合约、终端类合约等），承诺消费不叠加，合约期以最晚的到期时间为准。`;

  @action.bound
  getGoods(data) {
    this.goodsFree = {
      price: 10,
      title: '淘票票10元券',
      subTitle: '月月可享受',
      url: ''
    };

    const goodsList = [{
      goodsId: 1,
      price: 12,
      title: ['送国内通用流量3GB', '送网内通话100分钟', '送网内短信100条']
    },{
      goodsId: 2,
      price: 13,
      title: ['不送国内通用流量3GB', '不送网内通话100分钟', '不送网内短信100条']
    },{
      goodsId: 3,
      price: 14,
      title: ['送不送国内通用流量3GB', '送不送网内通话100分钟', '送不送网内短信100条']
    }]
    this.selectedId = goodsList[0].goodsId;
    this.goodsList = goodsList;
  }

  @action.bound
  setSelect(id) {
    this.selectedId = id;
  }

  @action.bound
  showMore() {
    this.moreFlag = true;
  }
}