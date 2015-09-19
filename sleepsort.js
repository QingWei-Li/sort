/**
 * @description 
 * 睡觉排序
 * http://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort
 * 
 * @return {array} 由小到大排序的数组
 * 
 * @example
 * 
 * var arr = [6,4,2,8,1,2].sleepSort();
 * console.log(arr); // [1,2,2,4,6,8]
 * 
 */
Array.prototype.sleepSort = function () {
  var _arr = [];
  this.forEach(function (number) {
    setTimeout(function () {
      _arr.push(number);
    }, 2 * number);
  });
  return _arr;
}
