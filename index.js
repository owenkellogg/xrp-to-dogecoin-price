const http = require('superagent');
const Promise = require('bluebird');

function XrpToDogConverter() {
}

XrpToDogConverter.prototype = {
  convert: function(options) {
    var _this = this;
    var resolver = Promise.pending();
    _this._convertXrpToBtcWithRippleCharts(options.xrp).then(function(btc) {
      _this._convertBtcToDogWithCryptsy(btc).then(function(dog) {
        resolver.resolve({
          xrp: options.xrp,
          dog: dog
        });
      });
    })
    return resolver.promise;
  },

  _convertXrpToBtcWithRippleCharts: function(xrp) {
    var resolver = Promise.pending();
    http
      .post('http://api.ripplecharts.com/api/exchange_rates')
      .send(query)
      .end(function(error, response) {
        if (error) {
          resolver.reject(error);
        } else {
          resolver.resolve(xrp / response.body[0].rate);
        }
      });
    return resolver.promise;
  },

  _convertBtcToDogWithCryptsy: function(btc) {
    var resolver = Promise.pending();
    http
      .get('http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=132')
      .end(function(error, response) {
        if (error) {
          resolver.reject(error);
        } else {
          resolver.resolve(btc / response.body.return.markets.DOGE.lasttradeprice);
        }
      });
    return resolver.promise;
  }
}

const query = {
  pairs : [
    {
      base: {
        "currency":"BTC",
        "issuer":"rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"
       },
       counter: {
         currency:"XRP"
       }
    }
  ],
  range : "day"
}    

module.exports = XrpToDogConverter;

