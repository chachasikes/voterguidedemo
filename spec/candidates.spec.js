var request = require("request");
var api_url = "http://216.151.17.6:3000/api/votersedge/candidates/all";

describe("Candidates API is working.", function() {
  describe("GET /", function() {
    it("API exists and has 51 items", function(done) {
      request.get(api_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(51);
        done();
      });
    });
  });
});
