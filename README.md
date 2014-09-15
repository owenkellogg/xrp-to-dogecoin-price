# XRP to Dogecoin Price

For use on the Ripple network to create a market from XRP to Dogecoins

Cryptsy and Ripple Charts are used to calculate the exchange rates

### Installation

    npm install --save xrp-to-dogecoin-price

### Usage

    var PriceFinder = require('xrp-to-dogecoin-price'); 
    var priceFinder = new PriceFinder();

    priceFinder.convert({
      xrp: 10000
    })  
    .then(function(conversion) {
      console.log(conversion);
    })  

