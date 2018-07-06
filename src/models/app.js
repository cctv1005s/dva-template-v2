import { routerRedux } from 'dva/router';

export default {
  namespace: 'app',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/') {
          const newLocation = Object.assign({}, location, {
            pathname: '/login',
          });
          dispatch(routerRedux.push(newLocation));
        }
      });
    },
  },
  effects: {
  },
  reducer: {
    save() {

    },
  },
};
