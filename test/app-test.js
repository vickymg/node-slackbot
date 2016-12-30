var request = require('request');
var chai = require('chai');
var expect = chai.expect;
var url = 'http://localhost:3000';

require("./../src/app.js");

describe('Server', function() {

  it("returns a status code of 200", function(done) {
    request(url, function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("responds with JSON message 'Hello, World!' at the root", function(done) {
    request(url, function(err, response, body) {
      var payload = JSON.parse(body);
      expect(payload.message).to.equal('Hello, World!');
      done();
    });
  });
});