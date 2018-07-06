const request = require('superagent');
const _ = require('lodash');
/**
 * 根据条件选择库位
 */
exports.warehouseLoc = ({
  limit,
  wid,
  area,
  floor,
  offset,
  thecolumn,
}) => {
  return request.get('/warehouse/warehouseloc')
                .query({
                  limit, wid, area, floor, offset, thecolumn,
                })
                .then(d => d.body)
                .then(d => _.get(d, 'extend.warehouseloc'));
};

/**
 * 根据条件选择仓库
 */
exports.warehouse = (id) => {
  return request.get(`/warehouse/warehousechild/${id}`)
                .then(d => d.body)
                .then(d => _.get(d, 'extend.warehouse'));
};

/**
 * 根据仓库wid选择库区
 */
exports.area = (wid) => {
  return request.get(`/warehouse/warehousearea/${wid}`)
                .then(d => d.body)
                .then(d => _.get(d, 'extend.warehouseArea'));
};

exports.del = (wlids) => {
  return request.delete(`/warehouse/warehouseloc/${wlids.join('-')}`).then(d => d.body);
};

exports.create = ({
  wid,
  area,
  therow,
  thecolumn,
  floor,
  thename,
  thecode,
  company,
  status,
  remark,
}) => {
  return request
          .post('/warehouse/warehouseloc')
          .type('form')
          .send({
            wid,
            area,
            therow,
            thecolumn,
            floor,
            thename,
            thecode,
            company,
            status,
            remark,
          })
          .then(d => d.body);
};

exports.edit = ({
  wlid,
  wid,
  area,
  therow,
  thecolumn,
  floor,
  thename,
  thecode,
  company,
  thestatus,
  remark,
}) => {
  return request
          .put(`/warehouse/warehouseloc/${wlid}`)
          .type('form')
          .send({
            wid,
            area,
            therow,
            thecolumn,
            floor,
            thename,
            thecode,
            company,
            thestatus,
            remark,
          })
          .then(d => d.body);
};
