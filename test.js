(function (__export) {
  var a;

  function randomArray (count, max) {
    var output = [];
    max = max || 100000;
    count = count || 100000;
    while(count--) {
      var random = Math.round(Math.random() * max)
      output.push(random);
    }
    return output;
  }

  function testSort (count, max) {
    a = randomArray(count, max);
    return this;
  }

  testSort.prototype.run = function (functionName) {
    var result;
    console.time(functionName);
    result = a[functionName]();
    console.timeEnd(functionName);

    for (var i = 1; i < result.length; i++) {
      if (result[i] < result[i-1]) {
        console.log('算法错误: ', i, ':', result[i-1]);
        return;
      }
    };

  }

  __export.TestSort = testSort;

})(window)
