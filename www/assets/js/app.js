String.prototype.format = function () {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function (capture) {
        return args[capture.match(/\d+/)];
    });
};

var RAYET = {
    debugOn: true,
    mode: "landing",
    log: function (txt) {
        if (!this.debugOn) return;
        if (typeof (console) !== "undefined") {
            console.log(">> " + txt);
        }
    },
    domLoaded: function (callback) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        var DOMLoadTimer = setInterval(function () {
            if (document.readyState == "complete") {
                callback;
                clearInterval(DOMLoadTimer);
            }
        },
            200);
    },
    // Gets the last segment of the url path
    getLastPath: function () {
        var parts = window.location.pathname.split("/");
        var page = "";
        for (i in parts.reverse()) {
            if (parts[i].length > 0) {
                page = parts[i];
                break;
            }
        }
        return page.toLowerCase();
    },
    // get query string value based on key. If not found, returns null
    getQSValue: function (key) {
        var querystring = location.search.replace(/\?/, "");
        var parts = querystring.split("&");
        var match = {};
        for (var L = 0; L < parts.length; L++) {
            var kvpair = parts[L].split("=");
            match[kvpair[0]] = kvpair[1];
        }
        if (match[key]) {
            return match[key];
        } else {
            return null;
        }
    },
    // using jQuery?
    getCookie: function (name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    },
    getElementsByClassName: function (oElm, strTagName, strClassName) {
        var arrElements = (strTagName == "*" && oElm.all) ? oElm.all :
            oElm.getElementsByTagName(strTagName);
        var arrReturnElements = new Array();
        strClassName = strClassName.replace(/\-/g, "\\-");
        var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
        var oElement;
        for (var i = 0; i < arrElements.length; i++) {
            oElement = arrElements[i];
            if (oRegExp.test(oElement.className)) {
                arrReturnElements.push(oElement);
            }
        }
        return (arrReturnElements)
    },
    // modifyButton: function(el, rename, addclass, removeclass) {

    // },
};

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );