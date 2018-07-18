// Token //
var token = "8d40593c3cc012af4b0fc67eba712ec8";

// URLs //

var url =
    "https://api.themoviedb.org/3/discover/movie?api_key=8d40593c3cc012af4b0fc67eba712ec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=";
var imgUrl = "https://image.tmdb.org/t/p/original";
var imgSrc;

// Output/Input fields //
var submit = document.querySelector("#submit-year");
var userInput = document.querySelector("#year-input").value;
// var getMovie = document.querySelector();
// var movieGif = document.querySelector();

// Functions //

var xhr = function(method, myurl, bool, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("yo");
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log("hi");
            callback(data);
        }
    };
    xhr.open(method, myurl, bool);
    xhr.send();
};

submit.addEventListener("click", function() {
    xhr("GET", url, true, searchMovie);
});

function searchMovie(data) {
    console.log(data);
}
