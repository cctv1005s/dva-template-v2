const request = require('superagent');
const _ = require('lodash');

/**
 * 根据id获取仓库的具体信息
 *
 * @param {String} id
 */
exports.warehouse = (id) => {
  return request.get(`/warehouse/warehouse/${id}`).then(d => d.body);
};

/**
 * 根据id获取从库的信息
 *
 * @param {String} id
 */
exports.warehousechild = (id) => {
  return request.get(`/warehouse/warehousechild/${id}`)
                .then(d => d.body)
                .then(d => _.get(d, 'extend.warehouse'));
};

/**
 * 获取某一个主库下的所有从库，包括自己
 * @param {String} id
 */
exports.level = (id) => {
  return request.get(`/warehouse/warehousechildlevel/${id}`)
                .then(d => d.body)
                .then(d => _.get(d, 'extend.warehouse'));
};


/**
 * 更新某个仓库的信息
 * @param {*} param0
 */
exports.edit = ({
  wid,
  place,
  thename,
  type,
  remark,
  capacity,
  contact,
  thetype,
}) => {
  let theplace = '';
  // 数据格式校验
  if (place && place.constructor === Array) {
    theplace = place.join('/');
  }
  return request.put(`/warehouse/warehouse/${wid}`)
                .type('form')
                .send({
                  place: theplace,
                  thename,
                  type,
                  remark,
                  capacity,
                  contact,
                  thetype,
                })
                .then(d => d.body);
};
