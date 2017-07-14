console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // GET albums
 /*$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });
*/
 // GET disneyFAM
 $.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/disneyFam',
  success: handleResponse,
  error: handleError
});

// MOVED SUCESS FUNCTION OUT OF THE DOC READY FUNCTION

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});

//Displays data for disneyFam data
function handleResponse(json) {

  json.forEach(function(event){
    $('.disney').text('Disney Characters');
    $('.char').append($(`<p>${json[i].name}</p>`));
    console.log(json);
  })
}

//Albums to show
/*function handleSuccess(json) {
  console.log(json);
  json.forEach(function(event, i){
    $('#uc').text('Music');
    $('#info').append($(`<p> ${json[i].title} <br>${json[i].artist} </p>`));

  })
}
*/
