// 获取 access_token
const config = require('../config/index.json'); // 配置数据
const axios = require('axios'); // 请求api
// const CircularJSON = require('circular-json');

// (设置 | 获取)缓存方法
const cache = require('../utils/cache');

module.exports = getAccessToken = (res) => {

  console.log("getAccessToken3");
  const fetchUrl = `${config.getAccessToken}?grant_type=client_credential&appid=${config.appid}&secret=${config.appsecret}`;
  // console.log(fetchUrl, config);

  // 获取缓存
  cache.getCache('access_token', function (cacheValue) {
    console.log("getAccessToken4");
    // 缓存存在
    if (cacheValue) {
      const result = JSON.stringify({
        access_token: cacheValue,
        from: 'cache'
      });
      res.send(result);
    } else {
      // 调取微信api
      axios.get(fetchUrl).then(response => {
        let json = JSON.stringify(response.data);
				res.send(json);
        // 设置缓存
        if (response.data.access_token) {
          cache.setCache('access_token', response.data.access_token)
        }
      }).catch(err => {
        console.log('axios occurs ', err);
      });
    }
  });

};

