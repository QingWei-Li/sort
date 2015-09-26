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

  function avg (arr) {
    var sum = 0;
    var length = arr.length;
    for (var i = 0; i < length; i++) {
      sum += arr[i];
    }
    return sum / length;
  }

  testSort.prototype.run = function (functionName) {
    var result, start, end;
    start = window.performance.now();
    result = a[functionName]();
    end = window.performance.now();
    
    for (var i = 1; i < result.length; i++) {
      if (result[i] < result[i-1]) {
        console.log('算法错误: ', i, ':', result[i-1]);
        return;
      }
    };
    result = end - start;
    console.log(functionName, ':', result, 'ms');
    return result;

  }

  testSort.prototype.compare = function (sort1, sort2, counter) {
    counter = counter || 10;
    var _counter = counter;
    var result1 = [];
    var result2 = [];
    while (_counter--) {
      result1.push(this.run(sort1));
      result2.push(this.run(sort2));
    }

    result1 = avg(result1);
    result2 = avg(result2);

    console.log('-----重复', counter, '次的平均效率------')
    console.log(sort1, ':', result1, 'ms');
    console.log(sort2, ':', result2, 'ms');
  }

  __export.TestSort = testSort;

})(window)
