var BloomFilter = function(length, hashingFunctions){
  this._length = length || 100;
  this._hashingFunctions = hashingFunctions;
  this._data = new Array(this._length);
}

BloomFilter.prototype.insert = function(value){
  for(var i = 0; i < this._hashingFunctions.length; i++){
    var hash = this._hashingFunctions[i](this._length, value);
    this._data[hash] = 1;
  }
}

BloomFilter.prototype.contains = function(value){
  for(var i = 0; i < this._hashingFunctions.length; i++){
    var hash = this._hashingFunctions[i](this._length, value);
    if(!this._data[hash]){
      return false;
    }
  }
  return true;
}

