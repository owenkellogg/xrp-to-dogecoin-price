### Dogecoin Trading Bot

For use on the Ripple network to create a market from XRP to Dogecoins

Cryptsy and Ripple Charts are used to calculate the exchange rates

### Usage

      converter = new XrpToDogConverter();

      converter.convert({
        xrp: 10000
      })  
      .then(function(conversion) {
        console.log(conversion);
      })  
      .error(function(error) {
        throw new Error(error);
      }); 

