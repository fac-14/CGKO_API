var url =
    "https://api.themoviedb.org/3/discover/movie?api_key=8d40593c3cc012af4b0fc67eba712ec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=";
var imgUrl = "https://image.tmdb.org/t/p/original";
var imgSrc;

// Output/Input fields //
var submit = document.querySelector("#submit-year");

function searchMovie(data) {
  var container = document.getElementById('movies-container');
  while (container.firstChild ) {
    container.removeChild(container.firstChild);
  }

  for(var i =0; i< 4; i++){
    var movImg = document.createElement("img");  
    movImg.src = imgUrl + data.results[i].poster_path;
    movImg.className = "movImgContainer";
    document.getElementById("movies-container").appendChild(movImg);
    var movAnchr = document.createElement('a');
    var mov_title = data.results[i].title;
    // if (document.querySelector(".movImgContainer")) {
    //   document.getElementById("form").reset();
    // }

    movAnchr.addEventListener('click',function(){
      var url_new = "http://api.giphy.com/v1/gifs/search?q="+mov_title+" movie "+"&api_key=LwdEhgTkpRWSHrsTOambPxFBCMIxGLPA" ;
    xhrFunc.apiMovieCall("GET", url_new, true, populateGiphy);
    event.preventDefault();
    });
    movAnchr.appendChild(movImg);
    movAnchr.href = "http://example.com"; //link to eventListener here
    movAnchr.appendChild(movImg);

    document.getElementById('movies-container').appendChild(movAnchr);
  }
}

function populateGiphy(data){
  var giphyContainer = document.getElementById("gif-container");
   var giphyImg = document.createElement('img');
  giphyImg.src = data.data[0].images.downsized.url;
  giphyContainer.appendChild(giphyImg);
  event.preventDefault(); 
 
}


submit.addEventListener("click", movieRequest);
submit.addEventListener("keyup", function(e){
  if (e.keyCode === 13) {
    movieRequest();
  }
});

function movieRequest() {
  var userInput = document.getElementById("year-input").value;
    var url_new = url + userInput;
    xhrFunc.apiMovieCall("GET", url_new, true, searchMovie);
    event.preventDefault();
}

