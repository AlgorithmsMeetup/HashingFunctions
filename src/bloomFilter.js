var BloomFilter = function(length, hashingFunctions){
  this._length = length || 100;
  this._hashingFunctions = hashingFunctions;
  this._data = new Array(size);
};

BloomFilter.prototype.insert = function(value){
  var key = [];

  for (var i = 0; i < 3; i++) {
    key[i] = hashingFunctions[i](this._length, value);
    this._data[key[i]] = 1;
  }

};

BloomFilter.prototype.contains = function(value){
  var key = [];

  for (var i = 0; i < 3; i++) {
    key[i] = hashingFunctions[i](this._length, value);
  }

  return key.reduce(function(current, position) {
    return this._data[position] === 1 ? current : false;
  }, true);
};
