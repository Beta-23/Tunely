$(document).ready(function() {
  console.log( "searchBar ready!")

  $("#search-bar-btn").click(function(e){
    e.preventDefault();
    console.log("press search button")
    // var query = $(this).find("#search-input").val();
    var nameSearch = $('form').serializeArray();
    console.log(nameSearch);
    // parse form object 
    var query = nameSearch[0].value
    console.log(query)
    $.getJSON("/search?=" + query, function(data) {
      console.log("got data back:", data)
      // do something with data returned from server
    })
  })

  // sanity check
  // $.getJSON("/search?=56d8cde2076899d022998b3b", function(data) {
  //   console.log("got data back:", data)
  //     // do something with data returned from server
  // })



  // function(req, res) {
  // adding event listener to search button
  // make ajax request to search route

  /*
  var searchAlbums = function(e) {
    e.preventDefault();
    console.log("press search button")
    var query = $(this).find("#search-input").val();
    console.log(query);
    $.get("/search?query=" + query, function(data) {
      console.log("got data back:", data)
      // do something with data returned from server
    })
  }
  */


});

