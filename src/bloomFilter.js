var BloomFilter = function(length, hashingFunctions){
  this._length = length || 100;
  this._hashingFunctions = hashingFunctions;
  this._data = new Array(this._length);
}

BloomFilter.prototype.insert = function(value){

}

BloomFilter.prototype.contains = function(value){

}

