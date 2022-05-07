
/*
 * @Description: egg插件配置，是否启动、目录指定等
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-23 23:24:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-23 23:34:43
 */
'use strict';

module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 参数校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // egg-sequelize 备用
  // sequelizePlus: {
  //   enable: true,
  //   package: 'egg-sequelize-plus',
  // },
  // egg-sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 配置跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // redis配置
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  // 授权服务
  // oAuth2Server: {
  //   enable: true,
  //   package: 'egg-oauth2-server',
  // },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  swaggerdoc: {
    enable: true, // 是否启用
    package: 'egg-swagger-doc', // 指定包名称
  },
};
