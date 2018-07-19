var test = require("tape");
var logic = require("./script");

// testing for 1. function called addTodo

// tests A: is pushing an toDo task into the toDos-array working?

test("returning object?", function(t) {  original_title
  var url_new = "https://api.themoviedb.org/3/discover/movie?api_key=8d40593c3cc012af4b0fc67eba712ec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994";

  var actual =  logic.apiMovieCall("GET", url_new, true, searchMovie)[0].original_title;
  var expected = 'ForrestGump';
  t.equal(actual, expected, "should equal object");
  t.end();
});
