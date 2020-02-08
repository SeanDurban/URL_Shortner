var crypto = require('crypto');

module.exports = {
  getUrlHash : function (originalUrl) {
    // Date.now() concat to ensure that identical urls get unique hash
    var uniqueUrl = originalUrl + Date.now();
    return crypto.createHash('md5').update(uniqueUrl).digest("base64").slice(0,6);
  }
}
