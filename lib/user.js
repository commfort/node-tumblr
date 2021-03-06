// Generated by CoffeeScript 1.6.3
(function() {
  var User, request;

  request = require('./request');

  module.exports = User = function(oauth) {
    this.oauth = oauth;
  };

  (function() {
    var alias, type, _i, _len, _ref, _results;
    this.info = function(fn) {
      var url;
      url = request.userUrl('info');
      return request.oauthGet(url, this.oauth, fn);
    };
    alias = function(self, action) {
      return self[type] = function(options, fn) {
        var url, _ref;
        if (typeof options === 'function') {
          _ref = [options, null], fn = _ref[0], options = _ref[1];
        }
        url = request.userUrl(action, options);
        return request.oauthGet(url, this.oauth, fn);
      };
    };
    _ref = ['dashboard', 'likes', 'following'];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      type = _ref[_i];
      _results.push(alias(this, type));
    }
    return _results;
  }).call(User.prototype);

}).call(this);
