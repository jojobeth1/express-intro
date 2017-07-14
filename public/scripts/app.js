console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });

// MOVED SUCESS FUNCTION OUT OF THE DOC READY FUNCTION

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});

function handleSuccess(json) {
  console.log(json);
  json.forEach(function(event, i){
    $('#info').append($(`<p> ${json[i].title} ${json[i].artist} </p>`));
    $('h1').text('Music');
  })
}
