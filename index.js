const http = require('superagent');
const Promise = require('bluebird');

function XrpToDogConverter() {
}

XrpToDogConverter.prototype = {
  convert: function(options) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      _this._convertXrpToBtcWithRippleCharts(options.xrp).then(function(btc) {
        _this._convertBtcToDogWithCryptsy(btc).then(function(dog) {
          resolve({
            xrp: options.xrp,
            dog: dog
          });
        });
      });
    });
  },

  _convertXrpToBtcWithRippleCharts: function(xrp) {
    return new Promise(function(resolve, reject) {
      http
        .post('http://api.ripplecharts.com/api/exchange_rates')
        .send(query)
        .end(function(error, response) {
          if (error) {
            reject(error);
          } else {
            resolve(xrp / response.body[0].rate);
          }
        });
    });
  },

  _convertBtcToDogWithCryptsy: function(btc) {
    return new Promise(function(resolve, reject) {
      http
        .get('http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=132')
        .end(function(error, response) {
          if (error) {
            reject(error);
          } else {
            resolve(btc / response.body.return.markets.DOGE.lasttradeprice);
          }
        });
    });
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

