const _ = require('lodash');

const data = {};

_.merge(data, {
  user: {
    id: 1,
    wid: 1,
    username: 'yangli',
    role: 'admin',
  },
});

module.exports = data;
