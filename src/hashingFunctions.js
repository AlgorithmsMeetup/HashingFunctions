var hashingFunction1 = function(range, value){
  // rotating hash
  var total = 0
  for(var i = 0; i < value.length; i++){
    total = (total  << 4) | (total >> 28) | value.charCodeAt(i);
  }
  return Math.abs(total % range);
}

var hashingFunction2 = function(range, value){
  // Jenkins Hash-- One at a time hash
  var total = 0
  for(var i = 0; i < value.length; i++){
    total += value.charCodeAt(i);
    total += total << 10;
    total ^= total >> 6;
  }
  total += total << 3;
  total ^= total >> 11;
  total += total << 15;

  return Math.abs(total % range);
}

var hashingFunction3 = function(range, value){
  // Modified XOR hash
  var total = 0;
  for(var i = 0; i < value.length; i++){
    total ^= value.charCodeAt(i);
  }
  return total % range;
}

var hashingFunctions = [hashingFunction1, hashingFunction2, hashingFunction3];
