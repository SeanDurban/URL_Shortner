// This is an attempt to allow all urls with optional http and www prefixes
const urlRegex = "((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*"

module.exports = {
  isValidUrl : function(url) {
    const regex = RegExp(urlRegex);
    return regex.test(url);
  }
}
