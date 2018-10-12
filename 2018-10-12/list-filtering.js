// question

/**
 * 输入一个数组，其中包含数字和字符串，提供一个方法过滤数组中的字符串，并返回一个新的纯数字的数组
 * 
 */

// solution

function filter_list(l) {
  return l.filter(el => Object.prototype.toString.call(el) !== "[object String]");
}

// others

function filter_list(l) {
  return l.filter(function (v) { return typeof v == 'number' })
}

function filter_list(l) {
  return l.filter(v => typeof v == "number")
}

const filter_list = l => l.filter(c => typeof c === 'number')

function filter_list(l) {
  return l.filter( function(elem){return typeof elem != "string"} )
}