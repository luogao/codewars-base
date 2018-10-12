// question

/**
 * 
 * 
 */

// solution


function findEvenIndex(arr) {

  const getSum = (a, b) => a + b
  const sum = arr.reduce(getSum, 0)
  const len = arr.length

  let res = -1

  if (0 === sum) {
    return 0
  }
  for (let i = 1; i < len; i++) {
    let arr1 = arr.slice(0, i)
    let arr2 = arr.slice(i + 1)
    let arrSum1 = arr1.reduce(getSum, 0)
    let arrSum2 = arr2.reduce(getSum, 0)
    if (arrSum1 === arrSum2) {
      res = i
      break
    }
  }
  return res
}

// others

function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
      return i;
    }
  }
  return -1;
}


function findEvenIndex(arr) {
  var left = 0, right = arr.reduce(function (pv, cv) { return pv + cv; }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}


const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// test

findEvenIndex([1, 2, 3, 4, 3, 2, 1])   // 3

findEvenIndex([1, 100, 50, -51, 1, 1])   // 1

findEvenIndex([1, 2, 3, 4, 5, 6])   // -1

findEvenIndex([20, 10, 30, 10, 10, 15, 35])   // 3