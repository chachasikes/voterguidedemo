  // Include what we need to include: this is specific to jasmine-node
  require("../controllers/data.js");

  describe("hello", function() {
      it('returns "world"', function() {
          expect(hello()).toEqual("world");
      });
  });