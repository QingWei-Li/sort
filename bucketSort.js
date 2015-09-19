/**
 * 桶排序
 * 
 * @description
 * 利用 JavaScript 的特性实现效率更高(?)的桶排序。与原版不同的是这一版本效率稳定 O(2n)
 * 而且理解简单。
 *
 * @author cinwell.li
 *
 * @date 15/09/19 12:00
 *
 * @example
 * [10,2,6,3,4,1,9,20,5,10, 200].bucketSort() //[1, 2, 3, 4, 5, 6, 9, 10, 10, 20, 200]
 * 
 * @see 
 * {@link https://zh.wikipedia.org/wiki/%E6%A1%B6%E6%8E%92%E5%BA%8F|桶排序-Wiki}
 */
Array.prototype.bucketSort = function() {
  var buckets = []; // 待排序的桶
  var output = []; // 排序过的数组
  var arr = this; // 原数组
  var i = arr.length; // 缓存数组的长度

  // 遍历原数组把元素当作桶的编号，然后桶里放数字 1 表示该元素出现了一次
  // 如果指定下标的桶是存在的，就把桶内的数字加 1 表示又出现了一次
  while(i--) {
    buckets[arr[i]] = (buckets[arr[i]] || 1 ) + 1;
  }

  // 现在要把排好位置的桶里的数字倒出来
  // 遍历桶
  for (index in buckets) {
    // 遍历桶里的数字，是几就表示当前桶所代表的数字出现了几次
    i = buckets[index] - 1;
    while ( i-- ) {
      // 加号是把字符串转数字
      output.push(+index);
    }
  }

  return output;
}