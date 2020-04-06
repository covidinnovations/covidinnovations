String.prototype.format = function () {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function (capture) {
        return args[capture.match(/\d+/)];
    });
};

var COVID = {
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

/// Javascript for Browse Solutions page
COVID.Solutions = {
    solution_order: [
        "diagnosis",
        "algorithms",
        "commodity",
        "crisis",
        "medication",
        "communication",
        "decontamination",
        "remote_healthcare",
        "prevention",
        "quarantine_life",
        "remote_work",
        "temporary_hospitals",
        "other"
    ],
    create_links: function(node) {
        var wrapper = document.getElementById("sol_links");
        if (wrapper == null) {
            COVID.log("Wrapper not found!");
            return;
        }
		for (var i=0; i < COVID.Solutions.solution_order.length; i++) {
            var key = COVID.Solutions.solution_order[i];
            var data = COVID.SolutionCategories[key];
            if (data != undefined) {
                // COVID.log(JSON.stringify(data));
                var li = document.createElement("li");
                li.setAttribute("class", "nav-item");
                li.setAttribute("id", key);

                var atag = document.createElement("a");
                atag.setAttribute("class", "nav-link");
                var href='javascript:COVID.Solutions.load_category_index({0});'.format(i);
                atag.setAttribute("href", href);
                atag.innerText = data.title;
                li.appendChild(atag);
                wrapper.appendChild(li);
            }
        }
    },
    load_category_index: function(index) {
        var key = COVID.Solutions.solution_order[index];
        var data = COVID.SolutionCategories[key];
        COVID.log("load_category: " + key);
        if (data != undefined) {
            var iframe = document.getElementById("airtable_solutions");
            var src = "https://airtable.com/embed/{0}?backgroundColor=blue&layout=card&viewControls=on".format(data.key);
            iframe.setAttribute("src", src);

            var nodes = document.getElementById('sol_links').getElementsByTagName("a");
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].setAttribute("class", "nav-link");
            }
            var node = document.getElementById(key);
            var link = node.firstChild;
            link.setAttribute("class", "nav-link active");

        } else {
            COVID.log("Lookup failed for key: " + key);
        }
    }
};

COVID.SolutionCategories = {
	"diagnosis": {
        "title":"Diagnosis & Screening",
		"key":"shrtGQcUPXluvcBpX"
    },
	"algorithms": {
        "title":"Data Science & Algorithms",
		"key":"shra91HEgk8P5e2VU"
    },
	"commodity": {
        "title":"Commodity Medical Supply",
		"key":"shr2UfMKQqqHxtLz9"
    },
	"crisis": {
        "title":"Crisis Management",
		"key":"shraF3XaR5IWtySW5"
    },
	"medication": {
        "title":"Medication",
		"key":"shra91HEgk8P5e2VU"
    },
	"communication": {
        "title":"Communication & Information",
		"key":"shrGMKlVrg0B7OaAq"
    },
	"decontamination": {
        "title":"Decontamination",
		"key":"shryTwrEVCassnDwC"
    },
	"remote_healthcare": {
        "title":"Remote Healthcare",
		"key":"shrU9b5rzBNnezO57"
    },
	"prevention": {
        "title":"Prevention & Education",
		"key":"shrhvxc2qfzVUbFPc"
    },
	"quarantine_life": {
        "title":"Quarantine Life",
		"key":"shrhQEi2RoxQlpJ4r"
    },
	"remote_work": {
        "title":"Remote Work",
		"key":"shrGLwCHYV9Odf9uF"
    },
	"other": {
        "title":"Other",
		"key":"shr8JIILpoe572ff2"
    },
	"temporary_hospitals": {
        "title":"Temporary Hospitals",
		"key":"shr15XBJD4aKGXKR9"
    }
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