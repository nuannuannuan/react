import {
  Toast
} from 'antd-mobile';
import axios from 'axios';

// 延迟
export const delay = (t) => new Promise(res => setTimeout(res, t));

// 取url中参数
export const getUrlQuery = (name) => {
  if ((typeof name).toLowerCase() !== 'string') {
    console.error('name参数应该为string');
  }
  const search = window.location.search.substr(1);
  const query = search.split('&');
  let result;
  for (let i = 0; i < query.length; i += 1) {
    if (query[i].indexOf(`${name}=`) > -1) {
      const arr = query[i].split(`${name}=`);
      ([, result] = arr);
      break;
    }
  }
  if (result) return result;
  console.log(`${name} 参数不存在`);
  return '';
};

export const getLS = (key) => {
  const ls = window.localStorage;
  if (ls.getItem(key)) {
    return ls.getItem(key);
  }
  return '';
};

export const setLS = (key, value) => {
  const ls = window.localStorage;
  ls.setItem(key, value);
};

export const removeLS = (key) => {
  const ls = window.localStorage;
  ls.removeItem(key);
};

/**
 * antd提示信息
 * @param type 提示类型，info, loading, success, fail, offline
 * @param content 提示文字
 * @param mask 是否遮罩
 * @param duration 提示关闭延迟，单位"秒"
 * @param onClose 关闭回调
 */
export const tips = (content, type = 'info', mask = true, duration = 2, onClose) => {
  Toast[type](content, duration, onClose, mask);
};

// 设置支付宝右上角按钮
export const setOptionMenu = ({
  text,
  callback
}) => {
  const {
    AlipayJSBridge
  } = window;
  try {
    AlipayJSBridge.call('showOptionMenu');
    window.AlipayJSBridge.call('setOptionMenu', {
      title: text,
      redDot: '-1', // -1表示不显示，0表示显示红点，1-99表示在红点上显示的数字
    });
    document.addEventListener('optionMenu', callback);
  } catch (e) {}
};

export const injectHistory = (props) => {
  const { history, historyStore: { setHistory } } = props;
  setHistory(history);
}

export const jumpUrl = (url, history) => {
  if (history) {
    history.push(url);
  } else {
    window.location.href = url;
  }
}

axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data.code === 10000) {
    return response.data;
  } else {
    tips(response.data.msg, 'fail');
    return false;
  }
}, error => {
  // 对响应错误做点什么
  const {
    status
  } = error.response
  let text = '网络异常请重试';
  if (status === 403) {
    text = '接口拒绝访问';
  }
  if (status === 400) {
    text = '接口参数错误';
  }
  if (status === 404) {
    text = '接口地址不存在';
  }
  tips(text, 'fail');
  return false;
});

export const request = ({ url, method = 'get', data }) => axios({
  method,
  url,
  data: {
    ...data,
    t: Math.random(),
  },
  headers: {
    'x-kdzx-Token': getLS('token'),
    'x-kdzx-city': getLS('locationCityCode'),
  },
});

export const dateFormat = (date) => {
  if (!date) {
    return null;
  }
  const t = new Date(date);
  function addZero(t) {
    let num = t;
    if (num.toString().length === 1) {
      num = `0${t}`;
    }
    return num;
  }
  const str = `${t.getFullYear()}-${addZero(t.getMonth() + 1)}-${addZero(t.getDate())}`;
  return str;
}

export const timeFormat = (date) => {
  if (!date) {
    return null;
  }
  const t = new Date(date);
  function addZero(t) {
    let num = t;
    if (num.toString().length === 1) {
      num = `0${t}`;
    }
    return num;
  }
  const str = `${t.getFullYear()}-${addZero(t.getMonth() + 1)}-${addZero(t.getDate())} ${addZero(t.getHours())}:${addZero(t.getMinutes())}`;
  return str;
}