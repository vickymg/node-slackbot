var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var request = require('request');

var Dicebot = require('./../src/dicebot');
var dicebot = new Dicebot();

describe('Dicebot', function() {

  describe('roll', function() {
    it('should return a random roll', function(done) {
      sinon.stub(Math, 'random').returns(0.5);
      expect(dicebot.roll(1, 6)).to.equal(4);
      done();
    })
  });

});
