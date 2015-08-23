/**
 * mergesort 算法
 * @return {array}        排序后的数组
 * 
 * @author qingwei.li
 * @example
 *
 *   // 由小到大排序
 *   window.mergeSort([6,5,3,1,8,7,2,4]); // [1,2,3,4,5,6,7,8]
 *
 *   // 由大到小排序
 *   window.mergeSort({
 *     arr: [6,5,3,1,8,7,2,4],
 *     order: '>'
 *   }); // [8, 7, 6, 5, 4, 3, 2, 1]
 * 
 */
(function (global) {

  var MergeSort = function (obj) {
    var arr;
    if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      arr = obj.arr;
      this.options = obj;
    }
    return this.sort(arr);
  };

  MergeSort.prototype.options = {
    arr: [],
    order: '<'
  };

  MergeSort.prototype.merge = function(left, right) {
    var result = [];
    var compare;

    // 两组数组的首位进行对比，谁小（大）就取出该数组的首位存入结果内，然后重复直到其中一组数组为空
    while (left.length && right.length) {

      switch (this.options.order) {
        case '<': {
          compare = left[0] < right[0];
          break;
        };
        case '>': {
          compare = left[0] > right[0];
        }
      }

      if (compare) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    // 直接拼接剩下的数组
    return result.concat(left).concat(right);
  };

  MergeSort.prototype.sort = function(arr) {
    var length = arr.length;
    var middle = (1 + length) / 2; // 求中间下标
    var left = arr.slice(0, middle); // 拆分左半部分
    var right = arr.slice(middle); // 拆分右半部分

    if (length < 2) {
      return arr;
    }
    
    return this.merge(this.sort(left), this.sort(right)); 
  };

  global.mergeSort = function (obj) {
    return new MergeSort(obj);
  }

})(window);