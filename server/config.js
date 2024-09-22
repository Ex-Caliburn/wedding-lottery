/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 0,
    title: "",
    text: "特别奖"
  },
  // {
  //   type: 1,
  //   count: 2,
  //   text: "特等奖",
  //   title: "神秘大礼",
  //   img: "../img/secrit.jpg"
  // },
  {
    type: 2,
    count: 2,
    text: "一等奖 (1-2)",
    // title: "Mac Pro",
    title: "",
    img: "../img/huoguo.png",
  },
  {
    type: 3,
    count: 4,
    text: "二等奖 (3-6)",
    // title: "华为 Mate30",
    title: "",
    img: "../img/lingshi.png",
  },
  {
    type: 4,
    count: 6,
    text: "三等奖 (7-12)",
    title: "",
    // title: "Ipad Mini5",
    img: "../img/chufang.png",
  },
  {
    type: 5,
    count: 8,
    text: "四等奖 (13-20)",
    title: "",
    // title: "大疆无人机",
    img: "../img/shuiba.png",
  },
  {
    type: 6,
    count: 10,
    text: "五等奖",
    title: "",
    // title: "Kindle",
    img: "../img/cash.png",
  },
  // {
  //   type: 7,
  //   count: 11,
  //   text: "六等奖",
  //   title: "漫步者蓝牙耳机",
  //   img: "../img/edifier.jpg"
  // }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
// const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];
const EACH_COUNT = [0, 2, 4, 6, 8, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "爱之幸运签";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
