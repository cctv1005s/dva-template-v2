import qs from 'querystring';
import { Modal } from 'antd';

export const getLocation = () => {
  const newLocation = {};
  const hashReg = window.location.href.match(/#([^?]*)\??/);
  newLocation.pathname = hashReg[1];
  const queryReg = window.location.href.match(/\?(.*)/);
  newLocation.query = qs.parse(queryReg[1]);
  delete newLocation.query._k;
  return newLocation;
};


// prefixCls 是阅读源代码发现的属性，不保证最新版本的兼容性，只保证这个版本的
export const loadingModal = (title, content) => Modal.info({
  prefixCls: 'loading-modal-antd-prefix ant-confirm',
  iconType: 'loading',
  title: title || '加载中',
  content: content || '内容正在加载中，请稍候',
});

/**
 * object to base64
 *
 * @param {object} item
 */
export const toBase64 = (item) => {
  return window.btoa(encodeURIComponent(JSON.stringify(item)));
};

export const fromBase64 = (str) => {
  return JSON.parse(decodeURIComponent(window.atob(str)));
}
