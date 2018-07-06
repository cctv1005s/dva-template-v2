// import request from 'superagent';

let defaultUser = {
  username: 'admin',
  role: 'admin',
  id: 0,
};

/**
 * 获取用户的信息,返回一个promise
 * 存入cache，适当时候更新
 */
export const user = () => {
  if (window.localStorage.login) {
    return Promise.resolve(defaultUser);
  } else {
    return Promise.reject('尚未登录');
  }
};

export const setUser = (userInfo) => {
  defaultUser = userInfo;
};
