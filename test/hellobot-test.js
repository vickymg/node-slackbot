var chai = require('chai');
var expect = chai.expect;
var request = require('request');
var HelloBot = require('./../src/hellobot');
var url = 'http://localhost:3000/hello';
var user_name = 'foobar';
var response, results;


describe('HelloBot', function () {

  beforeEach(function (done) {
    request.post({
          url: url,
          form: {user_name:'foobar'}
        }, function (err, resp, body) {
            response = resp;
            results = body;
            done();
    })
  });

  it('should return a status code of 200', function (done) {
            expect(response.statusCode).to.equal(200);
            done();
  });

  it('should return greeting message', function (done) {
            var message = JSON.parse(results);
            expect(message.text).to.equal('Hello, ' + user_name)
            done();
  });

});


