// const aCity = {
//   11: '北京',
//   12: '天津',
//   13: '河北',
//   14: '山西',
//   15: '内蒙古',
//   21: '辽宁',
//   22: '吉林',
//   23: '黑龙江',
//   31: '上海',
//   32: '江苏',
//   33: '浙江',
//   34: '安徽',
//   35: '福建',
//   36: '江西',
//   37: '山东',
//   41: '河南',
//   42: '湖北',
//   43: '湖南',
//   44: '广东',
//   45: '广西',
//   46: '海南',
//   50: '重庆',
//   51: '四川',
//   52: '贵州',
//   53: '云南',
//   54: '西藏',
//   61: '陕西',
//   62: '甘肃',
//   63: '青海',
//   64: '宁夏',
//   65: '新疆',
//   71: '台湾',
//   81: '香港',
//   82: '澳门',
//   91: '国外',
// }
export interface rulesIn {
  amt: [any, string];
  digits: [any, string];
  trim: [any, string];
  positivedigits: [any, string];
  letters: [any, string];
  date: [any, string];
  time: [any, string];
  email: [any, string];
  url: [any, string];
  qq: [any, string];
  IDcard: [any, string];
  IDcardNew: [any, string];
  tel: [any, string];
  mobile: [any, string];
  zipcode: [any, string];
  chinese: [any, string];
  username: [any, string];
  password: [any, string];
  msgCode: [any, string];
  cvv2: [any, string];
  creditcardexp: [any, string];
  bankcard: [any, string];
  chkmoney: [any, string];
  realname: [any, string];
  percent: [any, string];
  chinese20: [any, string];
  chinese18: [any, string];
  chinese10: [any, string];
  chinese64: [any, string];
  chinese50: [any, string];
  chinese1000: [any, string];
  arbitrarily30to1000: [any, string];
  bizcode: [any, string];
}
const commonRules: rulesIn = {
  amt: [/(^[1-9]([0-9]+)?(\.[0-9]{1,6})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, '请填写有效金额'],
  digits: [/^\d+$/, '请填写数字'],
  trim: [/^\S{0,100000000000000}\S$/, '请清除空格'],
  positivedigits: [/^[+]{0,1}(\d+)$/, '请填写正整数'],
  letters: [/^[a-z]+$/i, '请填写字母'],
  date: [/^\d{4}-\d{2}-\d{2}$/, '请填写有效的日期，格式:yyyy-mm-dd'],
  time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, '请填写有效的时间，00:00到23:59之间'],
  email: [/^[\w+-]+(\.[\w+-]+)*@[a-z\d-]+(\.[a-z\d-]+)*\.([a-z]{2,4})$/i, '请填写有效的邮箱'],
  url: [/^(https?|s?ftp):\/\/\S+$/i, '请填写有效的网址'],
  qq: [/^[1-9]\d{4,}$/, '请填写有效的QQ号'],
  IDcard: [/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/, '请填写正确的身份证号码'],
  IDcardNew: [
    /^[1-9]{1}[0-9]{9}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)[0-9]{3}([0-9]|[xX])$/,
    '请填写正确的身份证号码',
  ],
  tel: [/^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/, '请填写有效的电话号码'],
  mobile: [/^1[3-9]\d{9}$/, '请填写有效的手机号'],
  zipcode: [/^\d{6}$/, '请检查邮政编码格式'],
  chinese: [/^[\u0391-\uFFE5]+$/, '请填写中文字符'],
  username: [/^\w{3,12}$/, '请填写3-12位数字、字母、下划线'],
  password: [/^[\d]{6}$/, '请填写6位数字，不能包含空格'],
  msgCode: [/^[\d]{6}$/, '请输入6位有效验证码'],
  cvv2: [/^[0-9]{3,4}$/, '请填写有效的CVV2'],
  creditcardexp: [/^[\d]{4}$/, '请填写正确的有效期'],
  bankcard: [/^([1-9]{1})(\d{14,20})$/, '请填写有效的银行卡号'],
  chkmoney: [
    /^(([1-9][0-9]{0,12})|(([1]\.\d{1,2}|[1-9][0-9]{0,12}\.\d{1,2})))$/,
    '请输入正确的金额',
  ],
  realname: [/^.{1,20}$/, '请填写1-20位的真实姓名'],
  percent: [/^(\d|[1-9]\d|100)(\.\d{1,2})?$/, '利率值应在0-100之间'],
  chinese20: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~20个中文字符'],
  chinese18: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~18个中文字符'],
  chinese10: [/^[\u4e00-\u9fa5]{1,10}$/, '请输入1~10个中文字符'],
  chinese64: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~64个中文字符'],
  chinese50: [/^[\u4e00-\u9fa5]{1,50}$/, '请输入1~50个中文字符'],
  chinese1000: [/^[\u4e00-\u9fa5]{1,1000}$/, '请输入1~1000个中文字符'],
  arbitrarily30to1000: [/^(\s*[\S]\s*){30,1000}$/, '请输入30~1000个字符'],
  // accept: function(element, params) {
  //   if (!params) return true
  //   let ext = params[0],
  //     value = $(element).val()
  //   return (ext === '*') ||
  //              (new RegExp('.(?:' + ext + ')$','i')).test(value) ||
  //              this.renderMsg('只接受{1}后缀的文件',ext.replace(/\|/g, ','))
  // },
  // 使用正则表达式定义规则
  // industRegist : [/^\d{15}$/, '请填写15位工商注册号','请填写18位社会信用代码'],
  // 使用函数定义规则
  bizcode: [/^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$/, '请填写正确的统一社会信用代码'],
}

// --------------当 required 为true,字段必填时校验--------------
// 身份证号
export function checkIdNo(value: string, callback: any):void {
  const [regex] = commonRules.IDcard
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.IDcard[1])
  }
}

// 邮箱
export function checkEmail(value: string, callback: any):void {
  const [regex] = commonRules.email
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.email[1])
  }
}

// 手机号
export function checkPhoneNo(value: string, callback: any):void {
  const [regex] = commonRules.mobile
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.mobile[1])
  }
}

// 金额
export function checkAmt(value: string, callback: any):void {
  const [regex] = commonRules.amt
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.amt[1])
  }
}
// 银行卡号
export function checkBankCard(value: string, callback: any):void {
  const [regex] = commonRules.bankcard
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.bankcard[1])
  }
}
// 姓名
export function checkName(value: string, callback: any):void {
  const [regex] = commonRules.realname
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.realname[1])
  }
}
// 渠道
export function checkChannel(value: string, callback: any):void {
  if (value.length > 0 && value.length < 4) {
    callback()
  } else {
    callback('请勾选1-3个主要获取渠道')
  }
}

// 正整数
export function positivedigits(value: string, callback: any):void {
  const [regex] = commonRules.positivedigits
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.positivedigits[1])
  }
}

// 数字
export function checkNumber(value: string, callback: any):void {
  const [regex] = commonRules.digits
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.digits[1])
  }
}

// 百分数
export function checkPercent(value: string, callback: any):void {
  const [regex] = commonRules.percent
  if (regex.test(value)) {
    callback()
  } else {
    callback(commonRules.percent[1])
  }
}

// --------------当 字段非必填时校验--------------
// 手机号
export function checkPhoneNull(value: string, callback: any):void {
  const [regex] = commonRules.mobile

  if (regex.test(value)) {
    callback()
  } else if (value) {
    callback(commonRules.mobile[1])
  } else {
    callback()
  }
}

// 数字
export function checkNumberNull(value: string, callback: any):void {
  const [regex] = commonRules.digits
  if (regex.test(value)) {
    callback()
  } else if (value) {
    callback(commonRules.digits[1])
  } else {
    callback()
  }
}

// 金额
export function checkAmtNull(value: string, callback: any):void {
  const [regex] = commonRules.amt
  if (regex.test(value)) {
    callback()
  } else if (value) {
    callback(commonRules.amt[1])
  } else {
    callback()
  }
}

// 邮箱
export function checkEmailNull(value: string, callback: any):void {
  const [regex] = commonRules.email
  if (regex.test(value)) {
    callback()
  } else if (value) {
    callback(commonRules.email[1])
  } else {
    callback()
  }
}

// 统一社会信用代码
export function checkBizcode(value: string, callback: any):void {
  const [regex] = commonRules.bizcode
  if (regex.test(value)) {
    callback()
  } else if (value) {
    callback(commonRules.bizcode[1])
  } else {
    callback()
  }
}

export { commonRules }
