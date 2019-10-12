import historyStore from './historyStore';
import headStore from './headStore';
import goodsStore from './goodsStore';
import phoneModelStore from './phoneModelStore';

export default {
  historyStore: new historyStore(),
  head: new headStore(),
  goods: new goodsStore(),
  phoneModel: new phoneModelStore(),
}
