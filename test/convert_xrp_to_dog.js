const XrpToDogConverter = require(__dirname+'/../');

describe('Xrp To Dog Converter', function() {

  before(function() {
    converter = new XrpToDogConverter();
  });

  it('should calculate the conversion', function(done) {
    converter.convert({
      xrp: 10000
    })
    .then(function(conversion) {
      console.log(conversion);
      done();
    })
    .error(function(error) {
      throw new Error(error);
      done();
    });
  });
});

