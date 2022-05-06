/*
 * @Description: 封装常用工具方法
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-12-18 23:28:14
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-12-18 23:30:59
 */


'use strict';

/**
 * 扩展ctx.helper对象，此处定义的方法、变量， 可以通过ctx.helper.xx使用
 * 参考：https://www.eggjs.org/zh-CN/basics/extend
 */

exports.returnFormat = (code = 200, msg = '请求成功', result = {}) => {
  return { code, msg, result };
};


// module.exports = {
//   returnFormat
// }
