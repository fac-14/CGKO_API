

(function(){
  // Token //
  //var token = "8d40593c3cc012af4b0fc67eba712ec8";

var url =
    "https://api.themoviedb.org/3/discover/movie?api_key=8d40593c3cc012af4b0fc67eba712ec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=";
var imgUrl = "https://image.tmdb.org/t/p/original";
var imgSrc;

// Output/Input fields //
var submit = document.querySelector("#submit-year");

function searchMovie(data) {
  for(var i =0; i< 4; i++)
  {
    var movImg = document.createElement("img");  
    movImg.src = imgUrl + data.results[i].poster_path;
    movImg.className = "movImgContainer";
    console.log('movie path ='+ imgUrl + data.results[i].poster_path);
    document.getElementById("movies-container").appendChild(movImg);
  }
    console.log(data);

}

submit.addEventListener("click", function() {
  var userInput = document.getElementById("year-input").value;
    var url_new = url + userInput;
    console.log(url_new);
    xhrFunc.apiMovieCall("GET", url_new, true, searchMovie);
    event.preventDefault();
});

})();
