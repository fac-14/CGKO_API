

var xhrFunc = {
  apiMovieCall: function(method, myurl, bool, callback) {
  console.log('yo');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log("hi");

            callback(data);
            return data;
        }
    };
    xhr.open(method, myurl, bool);
    xhr.send();
}
};
console.log('xhrFunc='+xhrFunc);


if (typeof module !== "undefined") {
  module.exports = xhrFunc;
}
