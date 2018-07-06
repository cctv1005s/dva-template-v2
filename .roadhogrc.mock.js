const base = require('./mock/mock.js');
export default {
  // 'GET /warehouseloc/': (req, res) => { 
  //     setTimeout(()=>{
  //       res.send(base.locs); 
  //     }, 1000)
  //   },
  // 'GET /warehouse/': (req, res) => {
  //   setTimeout(()=>{
  //     res.send(base.warehouse); 
  //   }, 1000)
  // },
  // 'GET /warehouse/:id/area': (req, res) => {
  //   setTimeout(()=>{
  //     res.send(base.area);
  //   }, 1000)    
  // }
  'GET /mock/user': (req, res) => {
      setTimeout(()=>{
        res.send(base.user); 
      }, 1000);
  }
};