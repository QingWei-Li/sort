(function () {
  'use strict';

  Array.prototype.quickSort = function () {
    return sort(this);
  }

  function sort (arr) {
    
    var flag = arr[0];
    var leftArr = [];
    var rightArr = [];
    if (arr.length < 2) {
      return arr;
    }
    for (var i = 1 i < arr.length i++) {
      if (arr[i] < flag) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    leftArr = sort(leftArr);
    rightArr = sort(rightArr);

    return leftArr.concat(flag).concat(rightArr);
  }

})()