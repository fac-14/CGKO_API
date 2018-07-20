

var xhrFunc = {
  apiMovieCall: function(method, myurl, bool, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.open(method, myurl, bool);
    xhr.send();
}
};


if (typeof module !== "undefined") {
  module.exports = xhrFunc;
}
