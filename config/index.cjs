/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx79a1424e2d46da3d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fe1f01fd3c8272d13ec7e7ec1633e648',



  USERS: [
    {
      // 想要发送的人的名字
      name: '宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXSiL5lvg28HBEL21WBm0X73RJDk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yrRe0kTwWyz-IG1-1cRodwM-Us3iV3nyhE88PBwwD6w',
      city: '洛阳',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-23' },
      ],
    },
    {
      name: 'xus',
      id: 'oXSiL5lvg28HBEL21WBm0X73RJDk',
      useTemplateId: 'PTe7pQevpj07w5nxObrYiQmY33tQC1DjIIs5HpibDKo',
      city: '洛阳',
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-23' },
      ],
    },
    {
      name: 'xus',
      id: 'oXSiL5lvg28HBEL21WBm0X73RJDk',
      useTemplateId: 'mkIDQ9_eEJ_YJCypHqLaCTal4yLBuwCc2IAwPamF3d0',
      city: 'CN101181103',
    },
    {
      name: 'xus',
      id: 'oXSiL5lvg28HBEL21WBm0X73RJDk',
      useTemplateId: 'KkzRIPrQHFm38bqFJeCyd3YGFr2SSBUeJuIajvsSW2w',
      city: 'CN101181607',
    },
  ],
   SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: false,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: false,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
   FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
   
    {
      type: '节日', name: '除夕', year: '2023', date: '1-21',
    },
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
   
    {
      type: '节日', name: '元旦', year: '2023', date: '1-1',
    }
  ],
  FESTIVALS_LIMIT: 0,
TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'a8a4ad3057c5d52a31df2813aae6f6ef',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'title',
  },

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '-xEyW91a0Q9mWuZ4cxMoS5zAslNTntwA25vUzRdJmHk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXSiL5lvg28HBEL21WBm0X73RJDk',
    }
  ],

}

module.exports = USER_CONFIG
