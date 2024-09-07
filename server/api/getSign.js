/**
 * 获取签名
 * @returns:
 * 1. appId 必填，公众号的唯一标识
 * 2. timestamp 必填，生成签名的时间戳
 * 3. nonceStr 必填，生成签名的随机串
 * 4. signature 必填，签名
 */
const crypto = require("crypto");
const config = require("../config/index.json");

// sha1加密
function sha1(str) {
  let shasum = crypto.createHash("sha1");
  shasum.update(str);
  str = shasum.digest("hex");
  return str;
}

/**
 * 生成签名的时间戳
 * @return {字符串}
 */
function createTimestamp() {
  return parseInt(new Date().getTime() / 1000) + "";
}

/**
 * 生成签名的随机串
 * @return {字符串}
 */
function createNonceStr() {
  return Math.random().toString(36).substr(2, 15);
}

/**
 * 对参数对象进行字典排序
 * @param  {对象} args 签名所需参数对象
 * @return {字符串}    排序后生成字符串
 */
function raw(args) {
  var keys = Object.keys(args);
  keys = keys.sort();
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });

  var string = "";
  for (var k in newArgs) {
    string += "&" + k + "=" + newArgs[k];
  }
  string = string.substr(1);
  return string;
}

module.exports = getSign = (params, res) => {
  var ret = {
    jsapi_ticket: params.ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: params.url,
  };

  console.log(params, ret);

  var oriArray = new Array();
  oriArray[0] = params.nonceStr;
  oriArray[1] = params.timestamp;
  oriArray[2] = params.ticket;
  oriArray.sort();

  var original = oriArray.join("");
  ret.signature = sha1(original);

  if (params.signature) {
    console.log("来自微信的signature---生成", params.signature, ret.signature);
    res.send(params.echostr);
    return
  }
  ret.appId = config.appid;
  console.log("ret", ret);
  res.send(ret);
};
