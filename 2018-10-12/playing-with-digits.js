// question

/**
 * 
 *  Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

    Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

    If it is the case we will return k, if not return -1.

    Note: n, p will always be given as strictly positive integers.

 */


// solution

function digPow(n, p) {
  let sum = 0
  let n1 = n
  let arr = []

  for (let i = n.toString().length - 1; i >= 0; i--) {
    arr[i] = n1 % 10
    arr[i] = Math.pow(arr[i], p + i)
    n1 = Math.trunc(n1 / 10)
    sum += arr[i]
  }

  if (sum % n === 0) {
    return sum / n
  } else {
    return -1
  }
}

// others

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}

function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}

// test

digPow(89, 1)  // 1
digPow(92, 1)  // -1
digPow(46288, 3)  // 51
