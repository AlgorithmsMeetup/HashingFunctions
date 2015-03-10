var hashingFunction1 = function(range, value){
  return value.length % range;
};

var hashingFunction2 = function(range, value){
  var result = value.split('');

  result =  (result.map(function(value) {
    return value.charCodeAt(0);
  }).map(function(value) {
    return (value ^ range);
  }).reduce(function(a, b) {
    return a + b ;
  })) ^ 255;

  console.log(result % range, range);
  return result % range;
};

var hashingFunction3 = function(range, value){
  return (value.length ^ 255) % range;
};

var hashingFunctions = [hashingFunction1, hashingFunction2, hashingFunction3];
