var tests = function(hashingFunction, number){
  describe("hashingFunction" + number, function(){
    it('should be deterministic-- given the same inputs, the same output should always be generated', function(){
      var range = 10;
      var deterministic = true;

      for(var i = 0; i < testValues.length; i++){
        var result = hashingFunction(range, testValues[i]);
        for(var testNumber = 0; testNumber < 10; testNumber++){
          if(result !== hashingFunction(range, testValues[i])){
            deterministic = false;
            break;
          }
        }
        if(!deterministic){
          break;
        }
      }

      expect(deterministic).to.be(true);
    });

    it('should have a defined range-- it should return an integer between 0 and the range, not including the range', function(){
      var ranged = true;
      var result;

      for(var i = 0; i < testValues.length; i++){
        for(var range = 5; range < 20; range++){
          result = hashingFunction(range, testValues[i]);
          if(result !== Math.floor(result) || result < 0 || result > range){
            ranged = false;
            break;
          }
        }
        if(!ranged){
          break;
        }
      }

      expect(ranged).to.equal(true);
    });

    it('should have a fairly uniform distribution of outputs', function(){
      var uniformThreshold = 0.20;
      var range = 15;
      var outputs = {};
      var result;
      for(var i = 0; i < testValues.length; i++){
        result = hashingFunction(range, testValues[i]);
        if(!outputs[result]){
          outputs[result] = 0;
        }
        outputs[result]++;
      }

      var uniform = true;
      for(var output in outputs){
        if(outputs[output] > testValues.length * uniformThreshold){
          uniform = false;
        }
      }

      expect(uniform).to.be(true);
    });
  });
}

for(var i = 0; i < hashingFunctions.length; i++){
  tests(hashingFunctions[i], i + 1);
}

