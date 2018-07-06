import request from 'superagent';

// 获取任务列表
export const query = () => {
  return request.get('/audiorecord/getTaskList')
                .query({
                  user: 0,
                  mode: 'manage',
                })
                .then(d => d.text)
                .then(JSON.parse);
};

export const create = () => {
  return request.get('/audiorecord/newTask').then(d => d.text).then(JSON.parse);
};

export const del = () => {

};

// 更新任务
export const update = ({
  name,
  id,
  packageSize,
  price,
  guide,
  settings,
}) => {
  let _settings = '';
  if (typeof settings !== 'string') {
    _settings = JSON.stringify(settings);
  }
  return request.get('/audiorecord/updateTask').query({
    name, id, packageSize, price, guide, settings: _settings,
  });
};


// 改变状态
export const changeState = ({
  state,
  id,
}) => {
  return request.get('/audiorecord/setTaskState').query({
    state, id,
  });
};

// 查询包
export const queryPackage = ({
  id,
}) => {
  let _id = id;
  if (id && id.constructor !== Array) {
    _id = [id];
  }
  return request.get('/audiorecord/getPackageList').query({
    id: JSON.stringify(_id),
  }).then(d => d.text).then(JSON.parse);
};

// 查询条目
export const queryRecord = ({
  id,
}) => {
  let _id = id;
  if (id && id.constructor !== Array) {
    _id = [id];
  }
  return request.get('/audiorecord/getItem').query({
    id: JSON.stringify(_id),
  }).then(d => d.text).then(JSON.parse);
};

/**
 * 更新单包的信息
 * @param {Object} data 上传的数据
 *          - info {Object} 上传的信息,可自定义
 *          - package {String} package的id
 */
export const updatePack = (data) => {
  const info = data.info;
  let _info = info;
  if (typeof info !== 'string') {
    _info = JSON.stringify(info);
  }
  return request.get('/audiorecord/updatePackage').query({
    info: _info,
    package: data.package,
  });
};

// 创建新条目
export const createRecord = ({
  lineNumber,
  task,
  content,
}) => {
  let _content = content;
  if (typeof _content !== 'string') {
    _content = JSON.stringify(content);
  }
  return request.get('/audiorecord/uploadItem').query({
    lineNumber,
    task,
    content: _content,
  }).then(d => d.text).then(JSON.parse);
};

export const editRecord = () => {
  return Promise.reject('尚未开放');
};
