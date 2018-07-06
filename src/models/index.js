
import { message } from 'antd';

export default {

  namespace: 'index',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/' || location.pathname === '/index') {
          dispatch({
            type: 'query',
            payload: location.query,
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {  // eslint-disable-line
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
