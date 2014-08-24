
      converter = new XrpToDogConverter();

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
