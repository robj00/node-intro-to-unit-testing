const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

 it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

 it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

 it('return the number is not multiple of 3,5,or 15', function() {
      [1, 2, 7].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

});