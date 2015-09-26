(function() {

  function change (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  Array.prototype.insertSort = function () {
    var arr = this;

    for (var i = 0; i < arr.length; i++) {
      var cacheIndex = i;

      for (var j = cacheIndex - 1; j >= 0; j--) {
        if (arr[cacheIndex] > arr[j]) {
          break;
        }
        change(arr, cacheIndex, j);
        cacheIndex--;
      }
    }
    
    return arr;
  }

})();