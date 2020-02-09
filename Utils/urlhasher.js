var crypto = require('crypto');

module.exports = {
  getUrlHash : function (originalUrl) {
    // Date.now() concat to ensure that identical urls get unique hash
    // It essentially acts as an ever increasing counter
    var uniqueUrl = originalUrl + Date.now();
    // Use Base64 to include all character and generate more possible hashes
    // We want to keep the url short so limit to 6 chars ~ 64^6 different possibilities
    return crypto.createHash('md5').update(uniqueUrl).digest("base64").slice(0,6);
  }
}
