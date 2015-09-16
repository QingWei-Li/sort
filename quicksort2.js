(function () {
  Array.prototype.quickSort = function () {
    return sort( arr, 0, arr.length - 1 )
  }

  function sort (arr, left, right) {

    var flag = arr[left], oldLeft = left, oldRight = right

    if ( left > right ) 
      return arr
    
    while ( left < right ) {

      // 从右往左找到一个比 flag 小的数然后将它们交换（此处直接覆盖，因为 flag 已经缓存了，
      // 最后再插最终位置效果一样。目的是将 flag 插入到左边全比它小，右边全比它大的位置）
      while ( left < right && arr[ right ] >= flag ) 
        right--

      // 如果满足上面条件，且左边没超过右边，说明找到了一个右边的数小于 flag， 就要把它放
      // 到左边来 
      if ( left < right )
        arr[ left ] = arr[ right ]

      // 然后现在倒过来找，找到左边比 flag 大的数字，移动到 flag 的右边
      while ( left < right && arr[ left ] < flag )
        left++

      if ( left < right )
        arr[ right ] = arr[ left ]

    }

    // 最终剩下的位置就是 flag 的位置，此时 left 等于 right
    arr[ left ] = flag

    // 接着左右两边都重复这样的操作
    sort( arr, oldLeft, left - 1 )
    sort( arr, left + 1, oldRight )

    return arr

  }

})()

// test
var arr = [ 4, 1, 2, 3, 5, 7, 3, 1, 5, 9, 0, 4, 3 ]
console.log( arr.quickSort() )