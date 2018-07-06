import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import { hashHistory } from 'dva/router';
import router from './router';
import './index.less';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: hashHistory,
  onError(error) {
    if (error && error.message) {
      message.error(error.message);
    } else {
      message.error(JSON.stringify(error));
    }
  },
});


// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.model(require('./models/app.js'));

app.router(router);
app.start('#root');

// if (window.innerWidth >= 938) {
//   // 5. Start

// } else {
//   alert('暂时不支持宽度小于938px的屏幕');
// }
