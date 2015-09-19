(function () {
  'use strict';

  function quicksort (arr) {
    
    var flag = arr[0];
    var leftArr = [];
    var rightArr = [];
    if (arr.length < 2) {
      return arr;
    }
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < flag) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    leftArr = quicksort(leftArr);
    rightArr = quicksort(rightArr);

    return leftArr.concat(flag).concat(rightArr);
  }

  // 测试
  console.log(quicksort());

})();