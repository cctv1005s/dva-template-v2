import React from 'react';
import { Router } from 'dva/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import App from './routes/app.js';
import { user } from './utils/user';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model);
  }
};

// 登录检测
const loginNeed = (nextState, replace, callback) => {
  return user()
    .then(() => callback())
    .catch((e) => {
      replace({ pathname: '/login' });
      callback();
    });
};

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: 'login',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/login.js'));
          cb(null, require('./routes/login/index.js'));
        }, 'login');
      },
    },
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/index.js'));
          cb(null, require('./routes/index/index.js'));
        }, 'index-route');
      },
      childRoutes: [
        {
          path: 'index',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/index.js'));
              cb(null, require('./routes/index/index.js'));
            }, 'index');
          },
        },
        {
          path: '*',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/error/index.js'));
            }, 'index');
          },
        },
      ],
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
