console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // GET albums
 $.ajax({
   method: 'GET',
   url: 'http://localhost:5000/api/albums',
   success: handleSuccess,
   error: handleError
 });



$.ajax({
  method: 'GET',
  url: 'http://localhost:5000/api/disneyFam',
  success: handleResponse,
  error: handleError
});


// MOVED SUCESS FUNCTION OUT OF THE DOC READY FUNCTION
});
function handleError(xhr, status, errorThrown) {
  console.log('uh oh');
}


//Displays data for disneyFam data
function handleResponse(json) {
 $('h1.disney').text('Disney Characters');
 json.forEach(function(character){
   console.log(character.name)
   $('.char').append($(`<p>${character.name}</p>`));
 })
}

//Albums to show
function handleSuccess(json) {
  console.log(json);
  $('h1.uc').text('Music');
  json.forEach(function(album){
  $('.info').append(`<p>${album.title},  ${album.artist} </p>`);
  })
}
