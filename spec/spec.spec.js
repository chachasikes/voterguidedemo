// install jasmine-node
// run tests: jasmine-node spec

var request = require("request");
var base_url = "http://localhost:3000/"

describe("Server is working.", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Title", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toMatch("Voter");
        done();
      });
    });
  });
});
