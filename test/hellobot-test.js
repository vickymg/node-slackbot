var chai = require('chai');
var expect = chai.expect;
var request = require('request');
var url = 'http://localhost:3000/hello';

require('./../src/hellobot');

describe('HelloBot', function () {

  beforeEach(function (done) {
    request.post({
      url: url,
      form: {user_name: 'foobar'}
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
    expect(message.text).to.equal('Hello, foobar');
    done();
  });

  describe('when passed incorrect username', function () {

    beforeEach(function (done) {
      request.post({
        url: url,
        form: {user_name: 'slackbot'}
      }, function (err, resp, body) {
        response = resp;
        results = body;
        done();
      })
    });

    it('should not return greeting message if user is slackbot', function (done) {
      expect(results).to.equal('');
      done();
    });
  });
});


