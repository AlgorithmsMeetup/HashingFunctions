var BloomFilter = function(size){
  this.size = size;
  this.insert = function(){};
  this.contains = function(){};
}

describe("Bloom filter", function(){
  var bloomFilter;
  beforeEach(function(){
    bloomFilter = new BloomFilter(20);
  });

  it('should have an insert method', function(){
    expect(bloomFilter.insert).to.be.a('function');
  });

  it('should have a contains method', function(){
    expect(bloomFilter.contains).to.be.a('function');
  });

  it('should verify presence of inserted values', function(){
    bloomFilter.insert('cat');
    var containsCat = bloomFilter.contains('cat');
    expect(containsCat).to.be.true;
  });

  it('should be able to store and confirm presence of many values', function(){
    testValues.forEach(function(value){
      bloomFilter.insert(value);
    });

    var containsAll = testValues.reduce(function(containsAll, value){
      return containsAll && bloomFilter.contains(value);
    }, true);

    expect(containsAll).to.be.true;
  });

  it('should have a low false positive rate', function(){
    testValues.forEach(function(value){
      bloomFilter.insert(value);
    });

    var falsePositives = 0;
    notTestValues.forEach(function(notValue){
      if( bloomFilter.contains(notValue) ){
        falsePositives++;
      };
    });

    var falsePositiveRate = falsePositives / notTestValues.length;
    var thresholdRate = 1 / 100; // 1% false positives
    expect(falsePositiveRate).to.be.below(thresholdRate);
  });
});

